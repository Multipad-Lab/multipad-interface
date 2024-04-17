import styled from "styled-components"

const StakeFormStyleWrapper = styled.section`
  background-color: #1e1f35;
  padding: 24px;
  min-height: 640px;

  .btnApprove,
  .btnWithdraw {
    margin-top: 24px;
    width: 100%;
    height: 48px;
  }

  .stake-parameter__item + .stake-parameter__item {
    border-left: 1px solid #fff;
  }

  .stake-parameter {
    margin-top: 24px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    display: flex;
    height: 50px;

    &__item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;

      p:first-child {
        font-family: Russo One;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        text-align: center;
      }

      p:last-child {
        font-family: Russo One;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
      }

      p {
        margin: 0;
        line-height: 16px !important;
      }
    }
  }

  .stake-mount {
    margin-top: 24px;
  }

  .stake-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-family: Russo One;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 24px;
  }

  .description {
    color: #a3ff12;
    font-family: Inter;
    font-size: 12px;
    font-style: italic;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    margin-top: 20px;
  }

  .stake-tokens {
    margin-top: 30px;
    display: flex;
    gap: 8px;

    &__item {
      flex: 1;
      background-color: #313245;
      border: 1px solid #313245;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }

    &__item-active {
      border: 1px solid #a3ff12;
    }
  }

  .stake-tiers {
    display: flex;
    gap: 5px;
    margin-top: 24px;
    color: #fff;
    overflow: hidden;
    overflow: overlay;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b8b8b8;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #1e1f35;
      border-radius: 4px;
    }

    &__item {
      flex: 1;
      background-color: #313245;
      border: 1px solid #313245;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      flex-direction: column;
      text-align: center;
      padding: 10px 0px;
      height: 86px;

      .name {
        font-family: Russo One;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
      }

      .day {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
      }

      .ratio {
        font-family: Inter;
        font-size: 12px;
        font-style: italic;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
      }
    }

    &__item-active {
      border: 1px solid #a3ff12;

      .name {
        color: #a3ff12;
      }
    }
  }

  .coming_soon {
    text-align: center;
    margin-top: 50px;
  }
`

export default StakeFormStyleWrapper
