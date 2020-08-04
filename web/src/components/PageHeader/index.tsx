import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
    title: String;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header" >
            <div className="top-bar-container">
                <Link to="/" className="back-button" >
                    <img src={backIcon} alt="Voltar" />
                </Link>

                <img src={logo} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;