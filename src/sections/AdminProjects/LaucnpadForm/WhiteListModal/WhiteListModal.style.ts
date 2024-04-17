import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"
const modalAnimation = keyframes`${fadeIn}`
const WhiteListModalStyleWrapper = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  backdrop-filter: blur(3px);

  &::before {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: #000000;
    opacity: 0.8;
    content: "";
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 24px;
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    height: 460px;
    width: 540px;
    max-width: 100%;
    background-image: radial-gradient(circle, rgba(86, 75, 135, 0.85) 0%, #1e1f35 100%);
    animation: 1s ${modalAnimation};
  }

  .close_btn {
    position: absolute;
    right: 10px;
    top: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }

  textarea {
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 1.3;
    height: 100%;
  }
`

export default WhiteListModalStyleWrapper
