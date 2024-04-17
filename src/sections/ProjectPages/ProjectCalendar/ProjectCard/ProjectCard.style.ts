import styled, { keyframes } from "styled-components"
import bgShape from "src/assets/images/bg/shape-bg.png"
import { fadeIn } from "react-animations"
const modalAnimation = keyframes`${fadeIn}`
const ProjectCardStyleWrapper = styled.div`
  padding: 30px 24px;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  height: 460px;
  width: 360px;
  background-image: radial-gradient(circle, rgba(86, 75, 135, 0.85) 0%, #1e1f35 100%);
  animation: 1s ${modalAnimation};
  .project-progress {
    p {
      margin: 0;
      padding: 0;
      width: 50%;
    }
    .progress-custom {
      width: 50%;
    }
  }
  .project-card_thumb {
    width: 60px;
    height: 60px;
    min-width: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .type-ido {
    .title {
      color: rgba(255, 255, 255, 0.7);
      width: 82px;
    }

    .content {
      margin-left: 8px;
      width: calc(100% - 90px);
      text-align: right;
    }
  }

  .view-pool_custom {
    margin-top: 20px;
    width: 150px;
    height: 40px;
  }
  .close_btn {
    position: absolute;
    right: 10px;
    top: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }

  .card-hover-wrapper {
    opacity: 1;
    visibility: visible;
  }

  .project-info {
    margin-bottom: 28px;
    column-gap: 20px;
    align-items: center;
    a {
      color: #ffffff;
    }

    .project-auother {
      h4 {
        margin-bottom: 10px;
        text-transform: uppercase;
      }
    }

    .dsc {
      font-size: 14px;

      .name {
        margin-bottom: 0;
        font-family: "Russo One", sans-serif;
        color: rgb(255, 255, 255);
        font-size: 22px;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
      }
    }
  }

  .project-content {
    .project-header {
      position: relative;
      height: 35px;
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      &::before {
        position: absolute;
        width: 197px;
        height: 35px;
        background: url(${bgShape});
        background-position: center;
        background-repeat: no-repeat;
        left: -24px;
        top: 0px;
        content: "";
        /* z-index: 111; */
      }
    }
    .heading-title {
      h4 {
        font-size: 16px;
        margin-bottom: 0;
        position: relative;
      }
    }
  }

  .project-listing {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    li {
      display: flex;
      justify-content: space-between;
      span {
        color: #fff;
      }
    }
  }

  .social-share {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    .social-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 15px;
      a {
        color: #b5b5ba;
        svg {
          font-size: 17px;
        }

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    padding-left: 20px;
    padding-right: 20px;

    .project-info {
      .project-auother {
        h4 {
          font-size: 20px;
        }
      }
    }

    .project-content {
      .project-header {
        &::before {
          left: -20px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    height: 90%;
    width: 100%;
    padding: 15px 20px;
    .project-info {
      margin-bottom: 18px;

      img {
        height: 50px;
        width: 50px;
      }

      .project-auother {
        h4 {
          font-size: 14px;
        }
      }

      .dsc {
        font-size: 11px;
      }
    }

    .project-content {
      .project-header {
        margin-bottom: 25px;

        &::before {
          left: -20px;
          width: 183px;
          height: 33px;
          background-size: contain;
        }
      }

      .heading-title {
        h4 {
          font-size: 14px;
        }
      }
    }

    .project-listing {
      li {
        font-size: 12px;
      }
    }

    .close_btn {
      right: 0;
      top: 0;
    }

    .social-share {
      .social-links {
        a svg {
          font-size: 14px;
        }
      }
    }
  }
`

export default ProjectCardStyleWrapper
