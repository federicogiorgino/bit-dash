const theme = "dark";
//const theme = 'light';
export const lightTheme = theme === "light";

export const mainColor = lightTheme ? "white" : "#2C2C54";
export const secondaryColor = lightTheme ? "white" : "#151528";
export const accentColor = lightTheme ? "#B3EFB2" : "#B3EFB2";

if (lightTheme) {
  document.body.style.background = "#e1eaee";
  document.body.style.color = "#2C2C54";
}

export const mainColorBackground = `background-color: ${mainColor}`;
export const secondaryColorBackground = `background-color: ${secondaryColor};`;
export const accentColorBackground = `background-color: ${accentColor};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;

export const lightboxShadow = `box-shadow: 0px 0px 3px 1px ${lightTheme ? "#a9b6ff" : "#121d5b"}`;

export const greenBoxShadow = `box-shadow: 0px 0px 2px 3px #B3EFB2`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 3px #A30B37`;

export const bigFont = "font-size: 2em";
export const mediumFont = "font-size: 1.5em;";
export const regularFont = "font-size: 1.0em";
export const smallFont = "font-size: .75em";

export const textAlignCenter = "text-align: center;";
