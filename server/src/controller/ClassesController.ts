import { Request, Response, request } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {
    async index(req: Request, res: Response) {
        const filters = req.query;
    }

    async create(req: Request, res: Response) {
        const data = req.body;

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name: data.name,
                avatar: data.avatar,
                whatsapp: data.whatsapp,
                bio: data.bio
            });

            const insertedClassesIds = await trx('classes').insert({
                subject: data.subject,
                cost: data.cost,
                user_id: insertedUsersIds[0],
            });

            const classSchedule = data.schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id: insertedClassesIds[0],
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                }
            });

            await trx('class_schedule').insert(classSchedule);

            await trx.commit();

            res.status(201).send()
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}