import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import BlackPretendard from "../../assets/font/Pretendard-Black.woff2";
import ExBoldPretendard from "../../assets/font/Pretendard-ExtraBold.woff2";
import SeBoldkPretendard from "../../assets/font/Pretendard-SemiBold.woff2";
import BoldPretendard from "../../assets/font/Pretendard-Bold.woff2";
import MediumPretendard from "../../assets/font/Pretendard-Medium.woff2";
import RegularPretendard from "../../assets/font/Pretendard-Regular.woff2";
import LightPretendard from "../../assets/font/Pretendard-Light.woff2";
import ExLightPretendard from "../../assets/font/Pretendard-ExtraLight.woff2";
import ThinPretendard from "../../assets/font/Pretendard-Thin.woff2";

const GlobalStyle = createGlobalStyle`
${reset};
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: Pretendard, sans-serif;
font-size: 16px;
line-height: 1.5;
}

button {
cursor: pointer;
border: none;
background-color: transparent;
}

li, ol, ul {
    list-style: none;
}

@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 900;
        src: url(${BlackPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 800;
        src: url(${ExBoldPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        src: url(${SeBoldkPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        src: url(${BoldPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        src: url(${MediumPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url(${RegularPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 300;
        src: url(${LightPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 200;
        src: url(${ExLightPretendard}) format('woff2');  
    }
@font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 100;
        src: url(${ThinPretendard}) format('woff2');  
    }

`;

export default GlobalStyle;
