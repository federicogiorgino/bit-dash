import styled, { css } from "styled-components";

export const Layout = styled.div`
  padding: 30px;
`;

export const NavBar = styled.div`
  display: grid;
  grid-template-columns: 200px auto 100px 100px;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const ControlButton = styled.div`
  cursor: pointer;
  text-transform: capitalize
    ${(props) =>
      props.active &&
      css`
        text-decoration: underline;
        font-weight: bold;
      `};
`;


export const Button = styled.div`
  margin: 20px;
  color: green;
  curosr: pointer;
`;

export const Centered = styled.div`
  display: grid;
  justify-content: center;
`;