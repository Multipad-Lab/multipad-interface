import styled from "styled-components"

const StatisticsStyleWrapper = styled.section`
  position: relative;
  padding: 115px 0 145px;

  .section_shape {
    position: absolute;
    height: auto;
    width: auto;

    &_top {
      left: 0;
      top: 0;
    }
    &_bottom {
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }

  .v1_tokenomics_content_list_sect {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 16px;
    margin-top: 90px;
  }

  .v1_tokenomics_content_list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 16px;
    column-gap: 16px;

    ${(props: { numbers: number[] }) => {
      const cssRules = props.numbers.map(
        (number) => `
        &_${number % 1 !== 0 ? `${String(number).split(".")[0]}_${String(number).split(".")[1]}` : number} {
          width: ${number}%;
        }
      `
      )
      return cssRules.join("")
    }}
  }

  .v1_tokenomics_content_list_text {
    min-height: 50px;

    &.smallPercent {
      position: relative;
      width: 100%;

      h4 {
        flex-direction: row;
        transform: rotate(-45deg) translateY(16px);
        transform-origin: bottom left;
        position: absolute;
        bottom: 8px;
        align-items: center;
        height: 16px;
        width: max-content;
      }
    }

    h4 {
      display: flex;
      flex-direction: column;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;

      span {
        font-family: "Russo One";
        font-weight: 400;
        line-height: 28px;
        text-transform: uppercase;
        color: #ffffff;
        display: none;
      }
    }
  }

  .v1_tokenomics_content_list_progress {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &_1 {
      background: rgba(109, 74, 254, 0.1);
    }
    &_2 {
      background: rgba(109, 74, 254, 0.2);
    }
    &_3 {
      background: rgba(109, 74, 254, 0.3);
    }
    &_4 {
      background: rgba(109, 74, 254, 0.4);
    }
    &_5 {
      background: rgba(109, 74, 254, 0.5);
    }
    &_6 {
      background: rgba(109, 74, 254, 0.6);
    }
    &_7 {
      background: rgba(109, 74, 254, 0.7);
    }
    &_8 {
      background: rgba(109, 74, 254, 0.8);
    }
    &_9 {
      background: rgba(109, 74, 254, 0.9);
    }
    &_10 {
      background: rgba(109, 74, 254, 1);
    }

    span {
      font-family: "Russo One";
      font-weight: 400;
      line-height: 28px;
      text-transform: uppercase;
      font-size: 12px;
      color: #ffffff;
    }
  }

  .tokenomics-counter-wrapper {
    margin-top: 73px;
  }

  @media only screen and (max-width: 991px) {
    padding: 75px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .v1_tokenomics_content_list_sect {
      flex-direction: column;
    }
    .v1_tokenomics_content_list {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      ${(props: { numbers: number[] }) => {
        const cssRules = props.numbers.map(
          (number) => `
        &_${number % 1 !== 0 ? `${String(number).split(".")[0]}_${String(number).split(".")[1]}` : number} {
          .v1_tokenomics_content_list_progress {
            width: ${number}%;
          }
        }
      `
        )
        return cssRules.join("")
      }}
    }

    .v1_tokenomics_content_list_text {
      &.smallPercent {
        position: unset;
        width: 165px;
        display: flex;
        align-items: center;

        h4 {
          flex-direction: column;
          transform: unset;
          position: unset;
          bottom: 0;
          align-items: start;
          height: unset;
          width: 100%;
          span {
            display: inline;
            line-height: 1;
          }
        }
      }
    }

    .v1_tokenomics_content_list_progress {
      height: 40px;
      position: absolute;
      right: 0;
      span {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .v1_tokenomics_content_list_sect {
      flex-direction: column;
    }
    .v1_tokenomics_content_list {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      ${(props: { numbers: number[] }) => {
        const cssRules = props.numbers.map(
          (number) => `
        &_${number % 1 !== 0 ? `${String(number).split(".")[0]}_${String(number).split(".")[1]}` : number} {
          .v1_tokenomics_content_list_progress {
            width: ${number}%;
          }
        }
      `
        )
        return cssRules.join("")
      }}
    }

    .v1_tokenomics_content_list_text {
      min-width: 91px;
      &.smallPercent {
        position: unset;
        width: 165px;
        display: flex;
        align-items: center;

        h4 {
          flex-direction: column;
          transform: unset;
          position: unset;
          bottom: 0;
          align-items: start;
          font-size: 14px;
          height: unset;
          width: 100%;
          span {
            display: inline;
            line-height: 1;
          }
        }
      }
    }

    .v1_tokenomics_content_list_progress {
      height: 40px;
      position: absolute;
      right: 0;
      span {
        display: none;
      }
    }
  }
`

export default StatisticsStyleWrapper
