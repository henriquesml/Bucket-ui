import { css } from "@emotion/core";

const ArtiaButton = css`
background:linear-gradient(to bottom, #00c1b3 5%, #04bdaf 100%);
background-color:#00c1b3;
color:#FFF;
:hover {
    background:linear-gradient(to bottom, #00b6a9 5%, #00b6a9 100%);
    background-color:#f6f6f6;
}
`

const FleegButton = css`
background:linear-gradient(to bottom, #000 5%, #000 100%);
background-color:#000;
color:#FFF;
:hover {
    background:linear-gradient(to bottom, #000 5%, #000 100%);
    background-color:#111;
}
`

const ErrorInput = css`

outline-color: transparent;
border: 1px solid #f81c3f;

::-webkit-input-placeholder { /* Edge */
  color: #f81c3f;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #f81c3f;
}

::placeholder {
  color: #f81c3f;
}
`

const Index = {
    artia: ArtiaButton,
    fleeg: FleegButton,
    error: ErrorInput
}

export default Index