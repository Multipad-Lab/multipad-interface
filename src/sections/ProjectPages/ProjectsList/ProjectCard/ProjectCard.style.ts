import cardBgShape from "src/assets/images/bg/card-bg-shape-small.png"
import styled from "styled-components"

const ProjectCardStyleWrapper = styled.div`
  .previous-image {
    img {
      width: 70px;
      min-width: 70px;
      height: 70px;
      object-fit: cover;
    }
  }

  .previous-item {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 20px;
    padding: 30px 30px;
    color: #ffffff;
    background: #1a1b30;
    overflow: hidden;
    transition: 0.4s;
    z-index: 11;

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
      background: radial-gradient(circle, rgba(96, 79, 169, 0.58) -7%, #1e1f35 30%);
      &::before {
        opacity: 0.7;
        visibility: visible;
      }
      .card-hover-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .previous-gaming {
    display: flex;
    column-gap: 30px;
    width: 27%;
  }

  .previous-price {
    h4 {
      font-size: 22px;
      margin-bottom: 10px;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
      a {
        color: rgb(255, 255, 255);
      }
    }
    .dsc {
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
    }
  }

  .previous-chaining {
    width: 9.5%;
    img {
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 100%;
    }
  }

  .previous-launched {
    width: 14.8%;

    &.loading {
      padding-right: 16px;
      height: 16px;
    }
  }

  .previous-raise {
    display: flex;
    align-items: center;
    column-gap: 35px;
    width: 17.4%;
  }

  .previous-progress {
    width: 19.3%;
  }

  .progressbar_wrapper {
    width: 197px;
    .progress_bar {
      height: 6px;
      background-size: 10px 20px;
      .progress_bar_overlay {
        background-size: 10px 20px;
      }
    }
  }

  .previous-launchpad-type {
    width: 12%;
  }

  @media only screen and (max-width: 1199px) {
    .progressbar_wrapper {
      width: 140px;
    }
  }

  @media only screen and (max-width: 991px) {
    .previous-item {
      padding: 20px;
    }
    .previous-gaming {
      column-gap: 16px;
      .previous-price {
        h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }
      }
      .previous-image {
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      }
    }
    .previous-chaining {
      column-gap: 20px;
      img {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 100%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .previous-gaming {
      width: 100%;
    }
    .previous-progress {
      width: 100%;
    }
    .previous-chaining {
      width: 12%;
      img {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 100%;
      }
    }
    .previous-launched {
      width: 88%;
    }
    .previous-raise {
      width: 100%;
      flex-direction: column;
      align-items: baseline;
      row-gap: 10px;
    }

    .progressbar_wrapper {
      width: 100%;
    }
  }
`

export default ProjectCardStyleWrapper
