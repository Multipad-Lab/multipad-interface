import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const modalAnimation = keyframes`${fadeIn}`

const ConfirmViewPoolModalStyleWrapper = styled.div`
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

  .modal_box {
    position: relative;
    width: 100%;
    max-width: 1176px;
    margin: auto;
    animation: 1s ${modalAnimation};
    max-height: 100vh;
    line-height: 21px !important;

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

  .modal_content {
    height: 100%;
    width: 100%;
    background: #1e1f35;
    padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .modal_header {
    h2 {
      text-align: center;
      font-family: "Russo One", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
      text-transform: capitalize;
      color: #ffffff;
      margin-bottom: 16px;
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

  .modal_body {
    text-align: justify;
    forn-size: 16px;

    p {
      font-size: 18px;
      color: white;
      margin-bottom: 4px;
      line-height: 21px !important;
    }

    ul.show-style {
      list-style: inside;
      margin-bottom: 16px !important;
    }

    .checked-item {
      display: flex;
      align-items: center;
    }

    .checked-item-text {
      margin-left: 8px;
    }

    .custom-checkbox-wrapper {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
      margin-bottom: 16px;
      margin-right: 16px;

      input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .custom-checkbox-checkmark {
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        background: rgba(217, 217, 217, 1);
      }

      input[type="checkbox"]:checked ~ .custom-checkbox-checkmark {
        background: rgba(163, 255, 18, 1);
      }
    }

    .checked-list {
      margin-bottom: 24px !important;
      margin-top: 12px !important;
    }
  }

  .isNotConfirmed {
    a {
      cursor: not-allowed;
    }
  }

  .blur-text {
    color: rgba(255, 255, 255, 0.7) !important;
    font-size: 16px !important;
  }

  @media only screen and (max-width: 1200px) {
    &.modal_overlay {
      padding: 0 16px;
    }
  }
`

export default ConfirmViewPoolModalStyleWrapper
