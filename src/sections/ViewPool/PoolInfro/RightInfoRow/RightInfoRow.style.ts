import styled from "styled-components"

const RightInfoRowStyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 22px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 6px;
  align-items: center;
  font-weight: 400;

  & > div {
    display: flex;
    align-items: center;
  }

  .icon-wrapper {
    height: 22px;
    width: 22px;
    margin-right: 8px;
    diplay: flex;
    justify-content: center;

    &.icon-pool {
      background: white;
      border-radius: 100%;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
export default RightInfoRowStyleWrapper
