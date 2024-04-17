import styled from "styled-components"

const LaunchpadFormStyleWrapper = styled.div`
  padding: 50px 0 120px;
  background: #090a1a;

  h5 {
    font-family: "Russo One", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 45px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }

  .back-button {
    a {
      display: flex;
      justify-content: right;
    }

    img {
      transform: rotate(180deg);
      margin-right: 8px;
    }
  }

  .launchpad-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 16px;

    .launchpad-item {
      width: calc(33.3333% - 16px);
      overflow: hidden;
    }
  }

  @media only screen and (max-width: 1200px) {
    .launchpad-list {
      flex-wrap: wrap;

      .launchpad-item {
        width: calc(50% - 12px);
        margin-bottom: 24px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .launchpad-list {
      .launchpad-item {
        width: 100%;
      }
    }
  }
`

export default LaunchpadFormStyleWrapper
