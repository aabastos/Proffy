import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';

import "./styles.css";

import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main className="form-container">
                <fieldset>
                    <legend>Seus dados</legend>
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="avatar">Link da sua foto <span>(comece com http://)</span></label>
                    <input type="text" id="avatar" name="avatar" />
                    <label htmlFor="whatsapp">Whatsapp <span>(somente números)</span></label>
                    <input type="text" id="whatsapp" name="whatsapp" />
                    <label htmlFor="bio">Biografia</label>
                    <textarea id="bio" name="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <label htmlFor="subject">Matéria</label>
                    <select id="subject" name="subject" defaultValue="">
                        <option hidden disabled value="">Selecione uma opção</option>
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                    </select>
                    <label htmlFor="subject">Custo da aula por dia <span>(em R$)</span></label>
                    <input type="text" id="subject" name="subject" />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis <button type="button" onClick={addNewScheduleItem} >+ Novo horário</button></legend>
                    {
                        scheduleItems.map((scheduleItem) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <div>
                                        <label htmlFor="subject">Dia da semana</label>
                                        <select defaultValue="" id="week_day" name="week_day">
                                            <option hidden disabled value="">Selecione uma opção</option>
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
                                        <input type="time" id="from" name="from" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject">Até</label>
                                        <input type="time" id="to" name="to" />
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
            </main>
        </div>
    )
}

export default TeacherForm;