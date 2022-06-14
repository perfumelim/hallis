import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: Roboto, san-serif;
      color: ${theme.color.main};
    }

    html { 
      font-size: 0.5vw;
      box-sizing: border-box;
      background: ${theme.color.wine};
      width: 100%;
      position: relative;
      margin: 0 auto;
      -webkit-overflow-scrolling: touch; 
    }
    
    body,
    input,
    textarea,
    select
     {
      font-family: Roboto, san-serif;
      font-weight: inherit;
      font-stretch: inherit;
      font-style: inherit;
      line-height: inherit;
      letter-spacing: inherit;      
      font-size: 14px;
      color: ${theme.color.main};

    }
    
    ol,
    ul,
    li {
      list-style: none;
    }
    
    input:focus,
    button:focus,
    select:focus {
      outline: none;
    }
    
    button{
      cursor : pointer;
      border: none;
    }

`;
