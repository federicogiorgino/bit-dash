import styled, { css } from "styled-components";
import {
  greenBoxShadow,
  redBoxShadow,
  accentColor,
  mainColor,
  lightboxShadow,
  mainColorBackground,
  secondaryColorBackground,
  mediumFont,
} from "./styles";

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
  color: ${accentColor};
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid ${accentColor}
  &:hover {
    ${greenBoxShadow}
    background-color: ${accentColor}
    color: ${mainColor}
  }
`;

export const Centered = styled.div`
  display: grid;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
`;

export const Paper = styled.div`
  ${lightboxShadow}
  ${mainColorBackground}
  padding: 10px
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectablePaper = styled(Paper)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletablePaper = styled(SelectablePaper)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledPaper = styled(Paper)`
  pointer-events: none;
  opacity: 0.4;
`;

export const CoinLabel = styled.div`
  display: flex;
  flex-direction: column
  align-items: flex-end;
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
`;

export const SearchInput = styled.input`
  ${secondaryColorBackground}
  border: none
  color: white
  padding: 10px
`;

export const PricesGrid = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export const PricePaper = styled.div`
  ${lightboxShadow}
  ${mainColorBackground}
  padding: 10px
  display: flex;
  justify-content: space-between;
`;

export const SelectablePricePaper = styled(PricePaper)`
  flex-direction: column;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceVariation = styled.div`
  color: green;
  font-weight: bold;
  ${(props) =>
    props.negativeChange &&
    css`
      color: red;
    `}
`;

export const PriceValue = styled.div`
  ${mediumFont}
`;