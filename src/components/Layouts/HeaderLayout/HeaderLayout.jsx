import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BiCaretDown } from "react-icons/bi";
import profile from "../../../assets/profile.png";
import { useRecoilState } from 'recoil';
import { isMenuOpenState } from '../../../stores/MenuStore';

function HeaderLayout(props) {
    const [ isOpen, setIsOpen ] = useRecoilState(isMenuOpenState);

    const handleMenuToggleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SBrandLogo}>
                    <h1 css={S.SBrandName}>Oven</h1>
                    <span css={S.SVersion}>BETA</span>
                </div>
                <div css={S.SMenu} onClick={handleMenuToggleClick}>
                    <div css={S.SProfile} >
                        <div css={S.SProfileImgBox}>
                            <img src={profile} alt="" />
                        </div>
                        <span css={S.SUsername}>박지영</span>
                        <BiCaretDown />
                    </div>
                    {isOpen && (<ul css={S.SNav}>
                        <li css={S.SMenuListBox}>프로젝트 대쉬보드</li>
                        <li css={S.SMenuListBox}>계정 설정하기</li>
                        <li css={S.SMenuListBox}>헬프데스크</li>
                        <li css={S.SDivider}></li>
                        <li css={S.SMenuListBox}>로그아웃</li>
                    </ul>)}
                </div>
            </div>
        </div>
    );
}

export default HeaderLayout;