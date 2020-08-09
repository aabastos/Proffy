import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface Teacher {
    name: string,
    avatar: string,
    whatsapp: string
    bio: string,
    subject: string,
    cost: number
}

interface TeacherItemProps {
    index: number,
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article key={props.index} className="teacher-item">
            <header>
                <img src={props.teacher.avatar} alt={props.teacher.name} />
                <div>
                    <strong>{props.teacher.name}</strong>
                    <span>{props.teacher.subject}</span>
                </div>
            </header>

            <p>{props.teacher.bio}</p>

            <footer>
                <p>Preço/hora<strong>R${props.teacher.cost}</strong></p>

                <a target="__blank" href={`https://wa.me/${props.teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;