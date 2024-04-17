import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const modalAnimation = keyframes`${fadeIn}`

const BuyMlpModalStyleWrapper = styled.div`
  &.modal_overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;
    display: flex;
    justify-content: center;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #000000;
      content: "";
      opacity: 0.92;
      backdrop-filter: blur(33px);
    }
  }

  .mint_modal_box {
    position: relative;
    width: 500px;
    margin: auto;
    animation: 1s ${modalAnimation};

    &::before {
      backdrop-filter: blur(5px);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #171c21;
      content: "";
    }
  }

  .mint_modal_content {
    height: 100%;
    width: 100%;
    background: #1e1f35;
    padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    .exchanges__tokens {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      flex-direction: column;
      gap: 10px;
    }

    .exchanges__item {
      display: flex;
      gap: 8px;
      margin-top: 8px;

      &-name {
        width: 120px;
        height: 40px;
        background-color: #313245;
        border: 1px solid #a3ff12;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .tokens__item-name {
      font-family: Inter;
      font-size: 12px;
      font-style: italic;
      font-weight: 700;
      line-height: 16px;
      display: flex;
      justify-content: center;
      gap: 5px;

      p {
        margin: 0;
        color: #fff;
      }
    }
  }

  .modal_header {
    h2 {
      text-align: left;
      font-family: "Russo One", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
      text-transform: capitalize;
      color: #ffffff;
    }
    p {
      font-size: 14px;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      height: 45px;
      width: 45px;
      position: absolute;
      right: 0px;
      top: 0px;
      overflow: hidden;
      display: flex;
      justify-content: end;
      align-items: baseline;

      svg {
        margin-top: 5px;
        color: #ffffff;
      }

      &:before {
        content: "";
        background: rgba(255, 255, 255, 0.1);
        height: 150%;
        width: 150%;
        position: absolute;
        right: -35px;
        top: -35px;
        transform: rotate(45deg);
      }
    }
  }

  .modal_bottom_text {
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    font-size: 14px;
    a {
      color: #ffffff;
      margin-left: 7px;
    }
  }
`

export default BuyMlpModalStyleWrapper
