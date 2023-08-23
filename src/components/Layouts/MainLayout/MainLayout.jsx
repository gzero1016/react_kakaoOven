import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isMenuOpenState } from '../../../stores/MenuStore';

function MainLayout({ children }) {
    const [ isOpen, setIsOpen ] = useRecoilState(isMenuOpenState);

    const handleMenuToggleClick = () => {
        setIsOpen(false);
    }

    return (
        <div onClick={handleMenuToggleClick}>
            {children}
        </div>
    );
}

export default MainLayout;