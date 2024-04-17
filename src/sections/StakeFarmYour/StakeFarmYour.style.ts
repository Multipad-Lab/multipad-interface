import styled from "styled-components"

const StakeFarmYourStyleWrapper = styled.section`
  .container {
    background-color: #1e1f35;
    padding: 24px;
  }

  h3 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 129.7%;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .available-on {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 34px;
    margin-bottom: 16px;
  }

  @media (max-width: 667px) {
    .brands {
      grid-template-columns: repeat(2, minmax(0px, 1fr)) !important;
      grid-template-rows: repeat(3, minmax(0, 1fr)) !important;
      padding: 0 !important;
      margin-bottom: 24px !important;
    }
  }

  .brands {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 24px 58px;
    padding: 0 25px;
  }

  .description {
    background: #313245;
    padding: 12px;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
  }
`

export default StakeFarmYourStyleWrapper
