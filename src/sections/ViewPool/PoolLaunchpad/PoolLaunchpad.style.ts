import styled from "styled-components"

const PoolLaunchpadStyleWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  flex-wrap: wrap;

  .launchpad-item {
    flex: 1 0 calc(33.33% - 24px);
    max-width: calc(33.33% - 16px);
    overflow: hidden;
  }

  .empty,
  .connectButton {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;

    .launchpad-item {
      flex: 1 0 calc(50% - 24px);
      max-width: calc(50% - 12px);
    }
  }

  @media only screen and (max-width: 991px) {
    .launchpad-item {
      flex: 1 0 100%;
      max-width: unset;
    }
  }
`

export default PoolLaunchpadStyleWrapper
