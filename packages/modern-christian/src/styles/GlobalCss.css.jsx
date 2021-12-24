import React from "react";
import { Global, css, styled } from "frontity";

const GlobalCss = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: system-ui, Verdana, Arial, sas-serif;
        }
      `}
    />
  );
};
export const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;
export const Button = styled.button`
  background: steelblue;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-left: 7px;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export default GlobalCss;
