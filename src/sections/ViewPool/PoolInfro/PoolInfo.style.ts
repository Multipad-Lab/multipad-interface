import styled from "styled-components"

const PoolInfoStyleWrapper = styled.div`
  display: flex;
  margin-top: -60px;

  .pool-info-left {
    width: 50%;
    margin-bottom: 24px;

    .pool-info-data {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      .info-name {
        display: flex;
        align-items: center;
        column-gap: 8px;
        margin-bottom: 8px;

        .name {
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          overflow: hidden;
          word-break: break-all;
        }
        .symbol {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }
      }

      .logo {
        width: 76px;
        min-width: 76px;
        height: 76px;
        background: rgba(255, 255, 255, 1);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        overflow: hidden;
      }
      .name {
        text-transform: uppercase;
        font-size: 30px;
        color: white;
        line-height: 30px;
        font-family: "Russo One", sans-serif;
      }

      .network-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .network {
          display: flex;
          column-gap: 16px;

          a {
            color: #b5b5ba;
            svg {
              font-size: 22px;
            }

            &:hover {
              color: #ffffff;
            }

            svg {
              color: #ffffff;
            }
          }
        }

        .address {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          margin-left: 16px;
        }
      }
    }

    .pool-info-dsc {
      line-height: 21px !important;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 400;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      overflow: hidden;
      word-break: break-all;
    }

    a {
      color: white;
      font-size: 18px !important;
      font-weight: 400;
    }
  }

  .pool-info-right {
    width: 50%;
    margin-bottom: 24px;
    display: flex;
    position: relative;
    padding-left: 16px;

    &::after {
      position: absolute;
      height: 80px;
      width: 1px;
      background: rgba(255, 255, 255, 0.7);
      content: "";
      top: 0;
      left: calc(50% + 8px);
    }

    .chain-info {
      width: 50%;
      padding-right: 8px;

      .icon-pool {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .ido-info {
      width: 50%;
      padding-left: 8px;
    }
  }

  @media only screen and (max-width: 991px) {
    .pool-info-left {
      width: 60%;

      .info {
        width: calc(100% - 92px);
        padding-right: 16px;

        .info-name {
          justify-content: space-between;
        }
      }
    }

    .pool-info-right {
      width: 40%;
      display: block;

      &::after {
        display: none;
      }

      .chain-info,
      .ido-info {
        width: 100%;
        padding: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;

    .pool-info-left {
      width: 100%;

      .info {
        padding-right: 0;
      }
    }

    .pool-info-right {
      width: 100%;
      padding-left: 0;
    }
  }

  @media only screen and (max-width: 440px) {
    .symbol {
      display: none;
    }
  }
`

export default PoolInfoStyleWrapper
