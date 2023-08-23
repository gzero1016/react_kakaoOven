import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    background-color: #383d40;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1170px;
    height: 50px;
`;

export const SBrandLogo = css`
    display: flex;
    justify-content: center;
    padding: 15px;
    height: 100%;
    cursor: pointer;
`;

export const SBrandName = css`
    font-size: 22px;
    font-weight: 500;
    color: white;
`;

export const SVersion = css`
    padding: 1px 3px;
    font-size: 11px;
    color: #aaa;
`;

export const SMenu = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 100%;
    &:hover {
        background-color: #0000001a;
    }
`;

export const SProfile = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & * {
        font-size: 14px;
        color: white;
    }
    cursor: pointer;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

export const SUsername = css`
    padding: 0px 10px;
`;

export const SNav = css`
    position: absolute;
    transform: translateY(100%);
    bottom: 0px;
    right: 0px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    padding: 5px 0px;
    width: max-content;
    background-color: #fffffff2;
`;

export const SMenuListBox = css`
    display: flex;
    align-items: center;
    padding: 6px 24px;
    font-size: 14px;
    height: 32px;
    cursor: pointer;
    &:hover {
        background-color: #ecececf2;
    }
`;

export const SDivider = css`
    margin: 9px 0px;
    border-bottom: 1px solid #dbdbdb;
`;