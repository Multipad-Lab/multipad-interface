import styled from "styled-components"

const FarmFormStyleWrapper = styled.div`
  background-color: #1e1f35;
  padding: 24px;

  .balance-allowance {
    font-family: Russo One;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 20px;

    p {
      margin: 0;
    }

    .balance {
      display: flex;
      gap: 24px;

      .calculator {
        display: flex;
        gap: 5px;
      }
    }

    .allowance {
      display: flex;
      gap: 24px;
    }
  }

  .progressbar_wrapper {
    padding: 0;
    margin-top: 24px;
  }

  .btn-approve-withdraw {
    display: flex;
    gap: 4px;

    .approve,
    .withdraw {
      flex: 1;
      height: 48px;
    }

    .approve {
      border: 1px solid #a3ff12;
      background-color: transparent;
    }

    .withdraw {
      border: 1px solid #313245;
      background-color: transparent;
    }
  }

  .btn-view-pool {
    width: 100%;
    margin-bottom: 24px;
    margin-top: 24px;
    background-color: #a3ff12;
    color: #000000;
    height: 48px;
  }

  .btn-harvest {
    background-color: #313245;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .farm-pool-details {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Russo One;
    font-size: 22px;
    font-weight: 400;
    line-height: 29px;
    color: #fff;

    .earned {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        margin: 0 !important;
      }

      p:first-child {
        color: #a3ff12;
      }
    }
  }

  .farm-tokens {
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

  .farm-info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: Russo One;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 24px;
  }
`

export default FarmFormStyleWrapper
