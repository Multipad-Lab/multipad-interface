import styled from "styled-components"

export const SpinStyleWrapper = styled.div`
  position: relative;

  .spinning-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .spinning-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
