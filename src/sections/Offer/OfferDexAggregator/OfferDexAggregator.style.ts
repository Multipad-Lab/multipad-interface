import styled from "styled-components"

const OfferDexAggregatorStyleWrapper = styled.article`
  position: relative;
  background: rgba(26, 27, 47, 0.85);
  backdrop-filter: blur(5px);
  padding: 24px 24px 24px 0;
  transition: 1.4s;
  height: 272px;

  .offer_dexAggregator_dsc {
    padding-left: 24px;
    width: 50%;
  }

  .offer_dexAggregator_image {
    width: 50%;
  }

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

  .offer_dexAggregator_image {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 991px) {
  }
  @media only screen and (max-width: 480px) {
    .offer_dexAggregator_dsc {
      width: 100%;
    }
    .offer_dexAggregator_image {
      display: none;
    }
  }
`

export default OfferDexAggregatorStyleWrapper
