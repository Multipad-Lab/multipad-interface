import styled from "styled-components"

const ProjectCardStyleWrapper = styled.div`
  background: #090b1a;
  padding: 134px 0 90px;

  .section_title {
    margin-bottom: 50px;
  }
  .menu-list {
    font-family: "Russo One", sans-serif;
    padding-left: 42px !important;
    padding-right: 42px !important;
    margin-bottom: 15px !important;
    display: flex;
    justify-content: space-between;

    li {
      display: inline-block;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      transition: 0.4s;
    }
  }

  /* tabs  */
  .react-tabs {
    position: relative;

    .react-tabs__tab {
      position: relative;

      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: #6d4afe;
        content: "";
        transition: 0.4s ease-in-out;
      }

      &.react-tabs__tab--selected {
        &::before {
          width: 100%;
        }
      }
    }
  }
  .tabs-row {
    row-gap: 30px;
    transition: all 0.4s;
  }
  .react-tabs__tab-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: -145px;
    left: 0;
    width: 100%;
    height: auto;
    background: #222231;
    margin-bottom: 42px;
  }

  .tab_btn_wrapper {
    display: flex;
    align-items: center;
  }

  .item_sorting_list button,
  .react-tabs__tab button {
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    font-family: "Russo One", sans-serif;
    position: relative;
    text-transform: uppercase;
    padding: 18px 28px;
    transition: all 0.4s;

    &:hover {
      color: #ffffff;
    }
  }

  .item_sorting_list button {
    &.chain-button {
      width: 237px;
      justify-content: space-between;
    }

    &.access-button {
      width: 202px;
      justify-content: space-between;
    }
  }

  .react-tabs__tab {
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    button {
    }
  }

  .item_sorting_list {
    display: flex;
    align-items: center;
    button {
      position: relative;
      font-family: "inter", sans-serif;
      text-transform: capitalize;
      position: relative;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      padding: 18px 40px;
      display: flex;
      align-items: center;
      column-gap: 20px;
      img {
        height: 14px;
        width: 14px;
        transition: all 0.3s;
      }
      &:hover {
        .sub-menu {
          display: block;
          top: 59px;
        }
        img {
          transform: rotate(180deg);
        }
      }
      .sub-menu {
        transition: all 0.4s;
        display: none;
        position: absolute;
        top: 45px;
        left: 0;
        z-index: 1111;
        background: #222231;
        width: 100%;
        li {
          display: flex;
          align-items: center;
          font-size: 90%;
          column-gap: 5px;
          padding: 18px 28px;
          transition: all 0.4s;
          &:hover {
            color: #ffffff;
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
        li + li {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 110px;
    .menu-list {
      padding-left: 32px !important;
      padding-right: 32px !important;

      li {
        font-size: 14px;
      }
    }
    .react-tabs__tab {
      font-size: 14px;
      button {
        padding: 17px 12px;
      }
    }

    .item_sorting_list {
      button {
        padding: 17px 30px;
        font-size: 14px;

        &.chain-button {
          width: 193px;
        }

        &.access-button {
          width: 170px;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    padding-top: 123px;
    .section_title {
      margin-bottom: 35px;
    }

    .react-tabs__tab-list {
      flex-direction: column;
      align-items: flex-start;
    }

    .tab_btn_wrapper {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .react-tabs__tab {
      width: 33.33%;
      border: none;

      button {
        width: 100%;
      }
    }

    .item_sorting_list {
      width: 100%;
      button {
        width: 50% !important;
        border: none;
        justify-content: space-between;
      }

      button + button {
        border-left: 1px solid rgba(255, 255, 255, 0.08);
      }
    }

    .menu-list {
      padding-left: 10px !important;
      margin-bottom: 30px !important;
    }
  }

  @media only screen and (max-width: 375px) {
    .item_sorting_list {
      button {
        padding: 17px 19px;
        font-size: 13px;
      }
    }
  }
`

export default ProjectCardStyleWrapper
