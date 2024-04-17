import styled from "styled-components"

const OfferLaunchpadStyleWrapper = styled.article`
  position: relative;
  background: rgba(26, 27, 47, 0.85);
  backdrop-filter: blur(5px);
  padding: 24px;
  transition: 1.4s;
  height: 100%;

  .dsc {
    margin-bottom: 16px;
  }

  a {
    color: #ffffff;
    transition: 0.4s;

    &:hover {
      color: #ffffff;
    }

    img {
      margin-left: 12px;
    }
  }

  &:hover {
    background-image: radial-gradient(circle, rgba(137, 120, 211, 0.4) 0%, #1e1f35 100%);
    .card-hover-wrapper {
      opacity: 1;
      visibility: visible;
    }
  }

  .offter_launchpad_image {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 991px) {
    .dsc {
      width: 50%;
    }
    .offter_launchpad_image {
      height: 100%;

      img {
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    height: 272px;

    .dsc {
      width: 100%;
    }

    .offter_launchpad_image {
      display: none;
    }
  }
`

export default OfferLaunchpadStyleWrapper
