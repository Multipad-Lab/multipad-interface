import cardBgShape from "src/assets/images/bg/card-bg-shape-small.png"
import styled from "styled-components"

const ProjectCardStyleWrapper = styled.div`
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
    align-items: center;
    column-gap: 30px;
    width: 50%;

    .previous-image {
      img {
        width: 70px;
      }
    }
  }

  .previous-price {
    width: calc(100% - 100px);

    h4 {
      font-size: 22px;
      margin-bottom: 0px;
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

  .previous-launched {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-break: break-all;
    width: 50%;
    text-align: right;
  }

  @media only screen and (max-width: 1199px) {
  }

  @media only screen and (max-width: 991px) {
    .previous-item {
      padding: 20px;
    }
    .previous-gaming {
      column-gap: 16px;
      .previous-price {
        width: calc(100% - 80px);

        h4 {
          font-size: 18px;
        }
      }
      .previous-image {
        img {
          width: 50px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .previous-gaming {
      width: 100%;
    }
  }
`

export default ProjectCardStyleWrapper
