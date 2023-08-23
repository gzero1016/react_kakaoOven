import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BiSearch } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import { PiSquaresFourFill } from "react-icons/pi"; 

function ProjectOption(props) {
    const viewTypes = [useRef(), useRef()];

    return (
        <div css={S.SContainer}>
            <div css={S.SSearchBox}>
                <input type="text" placeholder='프로젝트 검색'/>
                <BiSearch css={S.SSearchIcon}></BiSearch>
            </div>
            <div css={S.SButtonGroup}>
                <input type="radio" id='viewType1' name="viewType" defaultChecked={true} ref={viewTypes[0]}/>
                <label css={S.SButton} htmlFor='viewType1'>
                    <BsListUl />
                </label>
                <input type="radio" id='viewType2' name="viewType" ref={viewTypes[1]}/>
                <label css={S.SButton} htmlFor='viewType2'>
                    <PiSquaresFourFill />
                </label>
            </div>
        </div>
    );
}

export default ProjectOption;