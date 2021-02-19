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
    warning: "#8c3137",
    warningLight: "#922d2d",
  },
  // Autumn
  autumn: {
    dark: "#702D1C",
    between: "#8B4F34",
    inputFieldsBorder: "#BF8F70",
    medium: "#DAB797",
    light: "#F1DFC2",
    warning: "#cc212e",
    warningLight: "#922d2d",
  },
  // Winter
  winter: {
    dark: "#071739",
    between: "#0b2255",
    inputFieldsBorder: "#4b5a79",
    medium: "#5e6472",
    light: "#dcdfe6",
    warning: "#693438",
    warningLight: "#a32139",
  },
};

const theme = colors.winter;

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

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const StyledButton = styled.button`
  margin: 5vh 0;
  width: 70vw;
  min-width: 300px;
  max-width: 50vw;

  height: 10vh;
  min-height: 70px;
  background-color: transparent;
  border: 0.5rem solid ${theme.medium};
  font-size: 1.6rem;
  display: flex;
  text-align: center;
  padding: 50px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${theme.medium};
  transition: transform 200ms, background-color 200ms, color 200ms;
  animation: 1s ease-out ${appearFromTop} 1;

  @media ${device.mobileL} {
    font-size: 2rem;
    &:hover {
      transform: scale(1.05);
      color: ${theme.light};
      background-color: ${theme.between};
    }
  }

  &:active {
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
  max-width: 50vw;

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

export const StyledWastedDisplay = styled.div`
  margin: 5vh auto;
  width: 30vw;
  min-width: 300px;

  height: 10vh;
  min-height: 70px;
  background-color: transparent;

  border: 0.5rem solid ${theme.warning};

  font-size: 2.8rem;
  display: flex;
  text-align: center;
  padding: 50px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${theme.warning};
  transition: transform 200ms, background-color 200ms, color 200ms;
  animation: 1s ease-out ${appearFromTop} 1;
`;
