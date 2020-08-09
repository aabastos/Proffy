import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
    interface Teacher {
        user_id: number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string,
        subject: string,
        cost: number
    }

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    const [teachers, setTeachers] = useState([]);

    function searchTeachers(e: FormEvent) {
        e.preventDefault();

        api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(response => {
            const teachers = response.data;
            setTeachers(teachers);
        });

    }

    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <select id="subject" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }}>
                            <option hidden disabled value="">Selecione uma opção</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="TypeScript">TypeScript</option>
                            <option value="React Native">React Native</option>
                            <option value="ReactJS">ReactJS</option>
                            <option value="NodeJS">NodeJS</option>
                        </select>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <select id="week_day" name="week_day" value={week_day} onChange={(e) => setWeekDay(e.target.value)}>
                            <option hidden disabled value="9">Selecione uma opção</option>
                            <option value="0" label="Domingo" />
                            <option value="1" label="Segunda-Feira" />
                            <option value="2" label="Terça-Feira" />
                            <option value="3" label="Quarta-Feira" />
                            <option value="4" label="Quinta-Feira" />
                            <option value="5" label="Sexta-Feira" />
                            <option value="6" label="Sábado" />
                        </select>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="time" id="from" name="from" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers.map((teacher: Teacher, index) => {
                        return (
                            <TeacherItem index={index} teacher={teacher} />
                        );
                    })
                }
            </main>
        </div>
    )
}

export default TeacherList;