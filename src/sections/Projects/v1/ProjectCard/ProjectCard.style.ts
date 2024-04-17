import bgShape from "src/assets/images/bg/shape-bg.png"
import styled from "styled-components"

const ProjectCardStyleWrapper = styled.div`
  & > a {
    color: white;
    &:hover {
      color: white;
    }
  }
  & > div {
    cursor: pointer;
  }
  padding: 30px 30px;
  background: rgba(30, 31, 53, 0.8);
  transition: all 0.4s;
  position: relative;
  z-index: 1;

  .dsc {
    color: rgba(255, 255, 255, 0.7);
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-break: break-all;
  }
  .project-info {
    margin-bottom: 28px;
    column-gap: 20px;
    a {
      color: #ffffff;
    }

    img {
      min-width: 70px;
    }

    .project-auother {
      h4 {
        margin-bottom: 10px;
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
      margin-bottom: 40px;

      &::before {
        position: absolute;
        width: 197px;
        height: 35px;
        background: url(${bgShape});
        background-position: center;
        background-repeat: no-repeat;
        left: -30px;
        top: 0px;
        content: "";
        z-index: 111;
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
    row-gap: 15px;
    height: 148px;

    li {
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 0.7);
      span {
        color: #fff;
      }
    }
  }

  .social-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .social-text {
      color: rgba(255, 255, 255, 0.7);
    }
    .social-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 15px;
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
  }

  &:hover {
    background-image: radial-gradient(circle, rgba(137, 120, 211, 0.4) 0%, #1e1f35 100%);

    .card-hover-wrapper {
      opacity: 1;
      visibility: visible;
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
    .project-info {
      flex-direction: column;
      row-gap: 20px;
    }
  }
`

export default ProjectCardStyleWrapper
