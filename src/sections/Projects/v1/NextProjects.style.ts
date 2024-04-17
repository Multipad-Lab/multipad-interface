import styled from "styled-components"
import sectionBg from "src/assets/images/bg/project-bg.jpg"
const NextProjectsStyleWrapper = styled.div`
  background: url(${sectionBg});
  padding-top: 115px;
  padding-bottom: 105px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  .single-project-row {
    row-gap: 30px;
  }

  .slider_item_wraper {
    padding-right: 12px;
    padding-left: 12px;
  }

  .slick-slider {
    .slick-next::before,
    .slick-prev::before {
      display: none;
    }

    .slick-prev,
    .slick-next {
      border: 1px solid rgba(255, 255, 255, 0.3);
      height: 47px;
      display: flex !important;
      width: 47px;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    .slick-prev {
      left: -56px;
    }

    .slick-next {
      right: -56px;
    }

    .slick-dots {
      li {
        button {
          width: 11px;
          height: 9px;
          transform: skew(20deg);
          background: rgba(255, 255, 255, 0.2);
          display: inline-block;
          margin: 0 5.5px;
          transition: 0.3s;
          &::before {
            opacity: 0;
          }
        }

        &.slick-active {
          button {
            background: #ffffff;
          }
        }
      }
    }
    .slick-list {
      overflow: unset;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        left: -95%;
        height: 100%;
        background: linear-gradient(90deg, rgb(10, 11, 26, 1) 0%, rgba(10, 11, 26, 0.95) 95%, rgba(10, 11, 26, 0) 100%);
        z-index: 1;
        opacity: 0.89;
      }

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        right: -95%;
        top: 0;
        height: 100%;
        background: linear-gradient(
          -90deg,
          rgb(10, 11, 26, 1) 0%,
          rgba(10, 11, 26, 0.95) 95%,
          rgba(10, 11, 26, 0) 100%
        );
        z-index: 1;
        opacity: 0.89;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 75px 0;
  }

  @media only screen and (max-width: 776px) {
    .button-calendar {
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 576px) {
    .slider_item_wraper {
      padding-right: 0;
      padding-left: 0;
    }
  }
`

export default NextProjectsStyleWrapper
