import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: "#233758",
  primaryLight: "#E8F0FD",
  success: "#0a5d39",
  successLight: "#E3F8EF",
  warning: "#7b5f15",
  warningLight: "#FFEDBF",
  error: "#8a0b28",
  errorLight: "#FDE3E9",
}

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 16px;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}

html, body, div, span, applet, object, iframe,
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
html {
  font-size: 62.5%;
}
body {
  overflow-x: hidden;
  font-family: Inter, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1rem;
  line-height: 28px;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: "pnum";
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums;
}

h1 {
    font-size: 40px;
    line-height: 48px;
}

h2 {
    margin-top: 16px;
    margin-bottom: 0;
    padding-bottom: 8px;
    font-size: 28px;
    font-weight: 700
}

blockquote,h3 {
    font-size: 24px
}

h3 {
    line-height: 30px
}

p {
    margin-bottom: 32px
}

a {
    line-height: 24px;
    font-weight: 500;
    text-decoration: underline
}

blockquote {
    margin-bottom: 24px;
    padding: 10px 20px;
    border-left: 3px solid #e2e2e2;
    font-weight: 700
}
`
