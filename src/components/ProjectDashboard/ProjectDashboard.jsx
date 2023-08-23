import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { HiPlusCircle } from 'react-icons/hi';

function ProjectDashboard(props) {
    return (
        <div css={S.SContainer}>
            <div css={S.SLayout}>
                <button>모두선택</button>
                    <div css={S.SAddBox}>
                        <HiPlusCircle  css={S.SAddIcon}/>
                        <button css={S.SAddButton}>새로운 프로젝트 만들기</button>
                    </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default ProjectDashboard;<div>
<div>

</div></div>