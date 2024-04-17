import styled from "styled-components"

const ProjectDetailsStyleWrapper = styled.div`
  position: relative;

  .page_header_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .dsc {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
  }

  .multipad-header {
    &__info {
      display: flex;
      column-gap: 16px;
      position: relative;
      margin-top: -54px;
    }

    &__logo {
      min-width: 96px;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &__slogan {
      display: flex;
      align-items: center;
      h1 {
        font-family: Russo One;
        font-size: 36px;
        font-weight: 400;
        line-height: 47px;
        text-transform: uppercase;
        margin-bottom: 0;
      }

      div {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        margin-top: 20px;
      }
    }
  }

  .project-details {
    background: #090a1a;
    margin-top: -42px;
    padding-top: 54px;
  }

  .project-details-tabs {
    border-bottom: 1px solid #4c4c51;
  }

  .project-details-content {
    padding-bottom: 100px;
    margin-top: 100px;
  }

  @media (max-width: 991px) {
    .project-details-content {
      margin-top: 30px;
    }
  }
`

export default ProjectDetailsStyleWrapper
