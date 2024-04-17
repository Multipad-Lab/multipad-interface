import styled from "styled-components"
const TabSwitchStyleWrapper = styled.div`
  padding: 5px;
  display: flex;
  gap: 5px;
  width: 100%;
  background-color: #313245;

  .tabSwitch {
    flex: 1;
    color: #c1c1c7;
    font-family: Russo One;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    height: 38px;
    border: 1px solid #c1c1c7;
    background-color: transparent;

    &-active {
      color: #fff;
      background-color: #6344e8;
      border-color: #6344e8;
    }
  }
`

export default TabSwitchStyleWrapper
