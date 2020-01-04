import { css } from "@emotion/core";

const ArtiaButton = css`
background:linear-gradient(to bottom, #00c1b3 5%, #00c1b3 100%);
color:#FFF;
:hover {
    background:linear-gradient(to bottom, #00b6a9 5%, #00c1b3 100%);
    color: #F6F6F6
}
`

const FleegButton = css`
background:linear-gradient(to bottom, #29bff5 5%, #29bff5 100%);
color:#FFF;
:hover {
    background:linear-gradient(to bottom, #2bb3e4 5%, #2bb3e4 100%);
    color: #F6F6F6
}
`

const TwygoButton = css`
background:linear-gradient(to bottom, #9349de 5%, #9349de 100%);
color:#FFF;
:hover {
    background:linear-gradient(to bottom, #8250b4 5%, #8250b4 100%);
    color: #F6F6F6
}
`

const ErrorButton = css`
border-color: #f81c3f;
color: #f81c3f;
:hover {
  color: #f81c3f
}
`

const themes = {
    artia: ArtiaButton,
    fleeg: FleegButton,
    twygo: TwygoButton,
    error: ErrorButton
}

export default themes