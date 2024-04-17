import styled from "styled-components"

const DescriptionStyleWrapper = styled.div`
  .highlights {
    margin-top: 40px;
  }

  .highlights-list {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 14px;

    div {
      margin: 10px;
      margin-bottom: 16px;
      position: relative;

      :after {
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .description-title {
    display: flex;
    align-items: center;

    .title {
      color: #6344e8;
      font-family: Inter;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0.2em;
      margin: 0px;
    }

    .border {
      border: none !important;
      border-top: 2px dashed #6344e8 !important;
      width: 100%;
    }
  }

  .product {
    margin-top: 50px;
  }

  .title {
    font-family: Russo One;
    font-size: 30px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0em;
    color: #ffffffb2;
    margin-top: 20px;
  }

  .product-description {
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .empty,
  .content {
    margin-top: 48px;
  }
`

export default DescriptionStyleWrapper
