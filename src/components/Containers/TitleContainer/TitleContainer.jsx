import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function TitleContainer({ title, children }) {
    return (
        <div css={S.SContainer}>
            <h1 css={S.STitle}>{title}</h1>
            {children}
        </div>
    );
}

export default TitleContainer;