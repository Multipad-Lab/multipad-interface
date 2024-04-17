import styled from "styled-components"

const OfferStyleWrapper = styled.div`
  background: #090b1a;
  padding-bottom: 120px;

  .section_title {
    text-align: center;
    margin-bottom: 55px;
  }

  .offer_tool {
    padding-right: 12px;
    width: 50%;
  }

  .offer_farm {
    padding-left: 12px;
    width: 50%;
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 85px;

    .offer_launchpad_wrapper {
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    .offer_tool_farm {
      flex-wrap: wrap;
    }

    .offer_tool {
      width: 100%;
      padding-right: 0;
    }

    .offer_farm {
      width: 100%;
      padding-left: 0;
    }
  }
`

export default OfferStyleWrapper
