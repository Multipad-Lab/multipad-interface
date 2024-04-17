import styled from "styled-components"

const MultipadTabsWrapper = styled.div`
  .multipad-tabs {
    display: flex;

    a {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: #ffffffb2;
      width: 108px;
      height: 52px;
      line-height: 52px;
      top: 1013px;
      left: 372px;

      &:hover {
        color: #fff;
      }
    }

    .active {
      color: #fff;
      border-bottom: 1px solid #6344e8;
    }
  }
`

export default MultipadTabsWrapper
