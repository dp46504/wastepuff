import styled, { createGlobalStyle } from "styled-components";
import { appearFromTop } from "./Animations";

export const colors = {
  // Summer
  summer: {
    dark: "#062601",
    between: "#0F4001",
    inputFieldsBorder: "#4F6826",
    medium: "#488C03",
    light: "#D1CD8B",
    warning: "#5c1f1f",
    warningLight: "#922d2d",
  },
  // Autumn
  autumn: {
    dark: "#702D1C",
    between: "#8B4F34",
    inputFieldsBorder: "#BF8F70",
    medium: "#DAB797",
    light: "#F1DFC2",
    warning: "#5c1f1f",
    warningLight: "#922d2d",
  },
  // Winter
  winter: {
    dark: "#071739",
    between: "#0b2255",
    inputFieldsBorder: "#4b5a79",
    medium: "#5e6472",
    light: "#dcdfe6",
    warning: "#5c1f1f",
    warningLight: "#922d2d",
  },
};

const theme = colors.summer;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Arial";
  color: ${theme.inputFieldsBorder};
}

html,
body {
  background-color: ${theme.dark};
  min-height: 100%;
  max-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
}
`;

export const StyledButton = styled.button`
  margin: 5vh 0;

  width: 70vw;
  min-width: 300px;

  height: 10vh;
  min-height: 70px;
  background-color: transparent;
  border: 0.5rem solid ${theme.medium};
  font-size: 2rem;
  display: flex;
  text-align: center;
  padding: 50px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${theme.medium};
  transition: transform 200ms, background-color 200ms, color 200ms;
  animation: 1s ease-out ${appearFromTop} 1;

  &:hover {
    transform: scale(1.05);
    color: ${theme.light};
    background-color: ${theme.between};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledInput = styled.input`
  margin: 5vh 0;

  width: 70vw;
  min-width: 300px;

  height: 10vh;
  min-height: 70px;

  text-align: center;
  background-color: transparent;
  border: 0.5rem dashed ${theme.inputFieldsBorder};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${theme.light};
  transition: transform 200ms, background-color 200ms, color 200ms;
  animation: 1s ease-out ${appearFromTop} 1;
  outline: none;

  &:focus {
    transform: scale(1.05);
    color: ${theme.light};
    background-color: ${theme.between};
  }
  &:hover {
    transform: scale(1.05);
  }
  &::placeholder {
    color: ${theme.inputFieldsBorder};
  }
`;

export const StyledSignInAnchor = styled.div`
  text-align: center;
  font-size: 1.5rem;
  text-decoration: underline;
  transition: transform 200ms;
  animation: 1s ease-out appearFromTop 1;
  &:hover {
    transform: scale(1.2);
  }
`;
