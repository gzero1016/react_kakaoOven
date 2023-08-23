import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function MainContainer({ children }) {
    return (
        <div css={S.SContainer}>
            {children}
        </div>
    );
}

export default MainContainer;