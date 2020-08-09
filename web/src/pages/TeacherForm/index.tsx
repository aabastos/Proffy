import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import "./styles.css";

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 9, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem, i) => {
            if (i === index) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(newArray);
    }

    function handleSendData(e: FormEvent) {
        e.preventDefault();

        console.log(
            {
                name, avatar, whatsapp, bio, subject, cost, scheduleItems
            }
        );

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push("/");
        });
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main className="form-container">
                <form onSubmit={handleSendData}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />

                        <label htmlFor="avatar">Link da sua foto <span>(comece com http://)</span></label>
                        <input type="text" id="avatar" name="avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />

                        <label htmlFor="whatsapp">Whatsapp <span>(somente números)</span></label>
                        <input type="text" id="whatsapp" name="whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />

                        <label htmlFor="bio">Biografia</label>
                        <textarea id="bio" name="bio" value={bio} onChange={(e) => { setBio(e.target.value) }} />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <label htmlFor="subject">Matéria</label>
                        <select id="subject" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }}>
                            <option hidden disabled value="">Selecione uma opção</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="TypeScript">TypeScript</option>
                            <option value="React Native">React Native</option>
                            <option value="ReactJS">ReactJS</option>
                            <option value="NodeJS">NodeJS</option>
                        </select>
                        <label htmlFor="cost">Custo da aula por dia <span>(em R$)</span></label>
                        <input type="text" id="cost" name="cost" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis <button type="button" onClick={addNewScheduleItem} >+ Novo horário</button></legend>
                        {
                            scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <div>
                                            <label htmlFor="subject">Dia da semana</label>
                                            <select id="week_day" name="week_day" value={scheduleItem.week_day} onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}>
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
                                        <div>
                                            <label htmlFor="subject">Das</label>
                                            <input type="time" id="from" name="from" value={scheduleItem.from} onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="subject">Até</label>
                                            <input type="time" id="to" name="to" value={scheduleItem.to} onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso" />
                        Importante!
                        Preencha todos os dados
                    </p>

                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>

            </main>
        </div>
    )
}

export default TeacherForm;