import styled from "styled-components"

const RefundButtonStyle = styled.div`
  .action_button {
    position: relative;
    width: 100%;

    &.disabled {
      cursor: not-allowed;
    }

    .btn_wrapper {
      width: 100%;
      height: 60px;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    a[variant="mint"] {
      background: rgb(163, 255, 18);
      color: rgb(9, 10, 26);
    }
  }
`

export default RefundButtonStyle
