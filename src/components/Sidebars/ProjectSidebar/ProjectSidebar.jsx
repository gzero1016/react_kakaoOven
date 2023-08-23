import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';

function ProjectSidebar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);

    const menus = [
        {
            id: 1,
            name: "나의 프로젝트",
            path: "/projects/my"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트",
            path: "/projects/share"
        }
    ]

    const handleLinkClick = (path) => {
        navigate(path);
    } 

    return (
        <ul css={S.SContainer}>
            {menus.map(menu => (
                <li css={S.SMenuBox(location.pathname.startsWith(menu.path))} key={menu.id} onClick={() => {
                    handleLinkClick(menu.path);
                }}>{menu.name}</li>
            ))}
        </ul>
    );
}

export default ProjectSidebar;