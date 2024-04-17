import styled from "styled-components"
import cardBgShape from "src/assets/images/bg/card-bg-shape-small.png"

const LaunchpadCardStyleWrapper = styled.div`
  border: 1px solid white;
  padding: 24px;
  position: relative;
  transition: 0.1s;
  z-index: 11;

  .launchpad-card-ended,
  .launchpad-card-upcomming {
    background: #191a29;
    width: fit-content;
    padding: 5px 50px;
    position: absolute;
    top: 21px;
    right: -40px;
    font-weight: bold;
    transform: rotate(45deg);
  }
  .launchpad-card-ended {
    color: rgb(192 187 187);
  }

  .launchpad-card-upcomming {
    color: rgb(163, 255, 18);
  }

  &::before {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0%;
    top: 0;
    background: url(${cardBgShape});
    background-repeat: no-repeat;
    background-position: center;
    content: "";
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    // background: radial-gradient(circle, rgba(96, 79, 169, 0.58) -7%, #1e1f35 30%);
    border-color: transparent;

    &::before {
      opacity: 0.7;
      visibility: visible;
    }
    .card-hover-wrapper {
      opacity: 1;
      visibility: visible;
    }
  }

  h3 {
    font-size: 22px;
    color: white;
    font-family: "Russo One", sans-serif;
    text-align: center;
  }

  .symbol {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    color: white;

    .icon {
      width: 30px;
      height: 30px;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .info {
    background: rgba(30, 31, 53, 1);
    padding: 12px;
    margin-top: 16px;
    height: 266px;

    .vesting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;

      span {
        font-size: 14px;
        font-weight: 400;
      }
      .vesting-content {
        width: 70%;
        color: rgba(163, 255, 18, 1);
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .commited_process {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 8px;
    font-size: 14px;
  }

  .commited_usdt {
    margin-top: 16px;
    text-align: right;
    font-weight: 400;
    color: white;
    font-size: 14px;
  }

  .button {
    width: 100%;
    margin-top: 32px;
    height: 48px;
    font-size: 14px;
    font-weight: 400;
    text-transform: unset;
    font-family: "Russo One", sans-serif;
    font-size: 16px;
    text-transform: up;
  }

  @media only screen and (max-width: 1200px) {
    h3 {
      font-size: 26px;
    }
  }
`

export default LaunchpadCardStyleWrapper
