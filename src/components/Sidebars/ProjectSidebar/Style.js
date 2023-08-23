import { css } from "@emotion/react";

export const SContainer = css`
    padding-right: 15px;
    width: 292.5px;
`;

export const SMenuBox = (isSelected) => css`
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    padding: 10px 15px;
    width: 100%;
    height: 40px;
    background-color: ${isSelected ? "#3498DB" : "transparent"};
    font-size: 14px;
    color: ${isSelected ? "white" : "black"};
    cursor: pointer;
    &:hover {
        ${!isSelected && "background-color: #eee;"}
    }
`;