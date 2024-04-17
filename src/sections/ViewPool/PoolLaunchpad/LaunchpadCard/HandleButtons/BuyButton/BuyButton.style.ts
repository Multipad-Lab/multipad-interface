import styled from "styled-components"

const BuyButtonStyle = styled.div`
  .quantity_input {
    border: 1px solid rgba(255, 255, 255, 0.15);
    height: 60px;
    max-width: 100%;
    width: 100%;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.disabled {
      opacity: 0.65;

      &,
      input,
      button {
        cursor: not-allowed;
      }
    }

    input {
      background: transparent;
      height: 100%;
      width: calc(100% - 75px);
      border: none;
      outline: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }

    button {
      width: 60px;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      outline: none;
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

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

  .quantityError {
    margin-bottom: -24px;
    color: #ff1a1a;
    height: 54px;
    margin-bottom: 0;
    line-height: 20px !important;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`

export default BuyButtonStyle
