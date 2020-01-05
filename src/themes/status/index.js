import { css } from "@emotion/core";

const SuccessStatus = css`
background-color: #92c353;
`

const WarningStatus = css`
background-color: #f8d22a;
`

const ErrorStatus = css`
background-color:#c4314b;
`

const UnknownStatus = css`
background-color:#979593;
`

const Small = css`
  height: 10px;
  width: 10px;
`

const Normal = css`
  height: 14px;
  width: 14px;
`
const Large = css`
  height: 20px;
  width: 20px;
`

const Index = {
    success: SuccessStatus,
    warning: WarningStatus,
    error: ErrorStatus,
    unknown: UnknownStatus,
    size: {
        small: Small,
        normal: Normal,
        large: Large
    }
}

export default Index