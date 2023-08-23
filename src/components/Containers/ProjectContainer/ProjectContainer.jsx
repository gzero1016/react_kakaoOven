import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
function ProjectContainer({ children }) {
    return (
        <div css={S.SContainer}>
            {children}
        </div>
    );
}

export default ProjectContainer;