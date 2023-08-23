import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SSearchBox = css`
    position: relative;
    margin-right: 20px;

    & > input {
        transition: all 0.1s ease;
        border: 1px solid #dbdbdb;
        outline: none;
        border-radius: 3px;
        padding: 6px 42.5px 6px 12px;
        width: 226.5px;
        height: 34px;
        &:focus {
            border-color: #3498DB;
            box-shadow: 0px 0px 10px 0px #3f9fDf77;
        }
    }
`;

export const SSearchIcon = css`
    position: absolute;
    transform: translateY(-50%);
    right: 8px;
    top: 50%;
`;

export const SButtonGroup = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & > input {
        display: none;
    }

    & > input:checked + label {
        background-color: #e6e6e6;
        box-shadow: inset 0px 0px 10px 0px #bbb;
    }
`;

export const SButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;

    width: 40px;
    height: 34px;
    font-size: 18px;

    &:first-of-type {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    &:last-child {
        border-left: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 39px;
    }
    cursor: pointer;
`;
