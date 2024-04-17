import styled from "styled-components"

const AmountInputStyle = styled.div`
  margin-top: 24px;

  .inputButton {
    background-color: #313245;
    height: 48px;
    padding: 5px;
    padding-left: 15px;
    position: relative;
  }

  .error {
    color: #ff1a1a;
    font-weight: 100;
  }

  .btnMax {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    background-color: #a3ff12;
    color: #000000;
  }

  label {
    display: block;
    font-family: Russo One;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 8px;
    color: #fff;
  }

  input {
    background-color: #313245;
    outline: none;
    border: none;
    height: 100%;
    color: #fff;
    font-family: Russo One;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    width: calc(100% - 140px);
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default AmountInputStyle
