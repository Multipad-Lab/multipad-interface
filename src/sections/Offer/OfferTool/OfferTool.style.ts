import styled from "styled-components"

const OfferToolStyleWrapper = styled.article`
  position: relative;
  background: rgba(26, 27, 47, 0.85);
  backdrop-filter: blur(5px);
  margin-bottom: 24px;
  padding: 24px;
  transition: 1.4s;
  height: 272px;

  .dsc {
    margin-bottom: 32px;
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

  .offter_tool_image {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 1200px) {
    .offter_tool_image {
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .offter_tool_image {
      width: auto;
    }
  }

  @media only screen and (max-width: 480px) {
    .offter_tool_image {
      display: none;
    }
  }
`

export default OfferToolStyleWrapper
