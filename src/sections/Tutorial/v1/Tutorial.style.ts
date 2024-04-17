import styled from "styled-components"

const TutorialStyleWrapper = styled.section`
  .section_title_wrapper {
    padding-top: 130px;
  }
  .participate-item {
    .number-image {
      margin-right: 12px;
      flex: 0 0 21%;
    }

    h4 {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 991px) {
    .participate-item {
      padding-bottom: 20px;

      .number-image {
        flex: 0 0 15%;
      }
    }
  }

  @media only screen and (max-width: 776px) {
    .button-verify {
      margin-top: 8px;
    }

    .participate-item {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`

export default TutorialStyleWrapper
