import React from 'react'

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <body>
                <h1>Hello World</h1>
            </body>
        </div>
    )
}

export default TeacherList;