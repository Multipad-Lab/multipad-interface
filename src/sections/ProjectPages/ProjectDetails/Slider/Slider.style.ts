import styled from "styled-components"

const SliderStyleWrapper = styled.div`
  margin-top: 32px;
  padding-bottom: 40px;

  li:not(.slick-active) .slider-thumb {
    display: block;
    position: relative;

    div {
      position: absolute;
      background: rgb(0 0 0 / 40%);
      height: -webkit-fill-available;
      width: 100%;
      top: 0;
    }
  }

  .slick-arrow.slick-prev:before,
  .slick-arrow.slick-next:before {
    display: none;
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-dots li {
    width: 105px;
    height: 100%;
    margin: 0px;
  }

  .slick-dots li + li {
    margin-left: 20px;
  }

  .slick-dots.slick-thumb {
    bottom: -85px;
    display: flex !important;
    justify-content: center;
  }

  .slick-prev {
    left: 15px;
    z-index: 1;
  }

  .slick-next {
    right: 5px;
  }

  .slick-prev,
  .slick-next {
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 35px;
    width: 35px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 1;
    display: flex !important;
  }

  .token-sale-footer {
    background: #343549;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
    height: 34px;
    line-height: 34px;
  }

  .token-sale-main {
    background: #1e1f35;
    padding: 32px;

    .description {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;

      div {
        margin-top: 10px;
        word-break: break-word;
      }
    }

    .btn-view-pool {
      width: 100%;
      margin-top: 24px;
      text-transform: capitalize;
      height: 48px;
    }

    &__header {
      display: flex;
      justify-content: space-between;

      .fundraise-goal {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
      }

      .tba {
        font-family: Russo One;
        font-size: 36px;
        font-weight: 400;
        line-height: 47px;
        color: #fff;
      }

      .header-right {
        a {
          width: 114px;
          height: 48px;
          font-family: Russo One;
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: center;
          text-transform: capitalize;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .token-sale {
      margin-top: 120px;
    }
  }

  @media (max-width: 776px) {
    .slick-dots.slick-thumb {
      bottom: -45px;
    }
  }
`

export default SliderStyleWrapper
