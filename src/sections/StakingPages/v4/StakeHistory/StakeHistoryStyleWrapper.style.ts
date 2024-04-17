import styled from "styled-components"

const StakeHistoryStyleWrapper = styled.div`
  margin: 80px 0 55px;
  .widget_title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    column-gap: 7px;
    font-size: 22px;
    img {
      height: 15px;
    }
  }

  .spinning-overlay {
    background: rgba(0, 0, 0, 0.2);
  }

  .schedule_table {
    min-height: 300px;

    table {
      width: 100%;
      .table-header {
        background: #1e1f35;
        text-transform: uppercase;
        font-family: "Russo One", sans-serif;

        th {
          background: #1e1f35;
          font-weight: 400;
          padding: 17px 30px;
        }
      }
      td {
        position: relative;
        padding: 17px 30px;
        border-bottom: 1px solid #2e2f3c;
      }

      tr {
        button {
          background: rgba(255, 255, 255, 0.1);
          height: 40px;
          width: 120px;
          padding: 0px;
          font-family: "Russo One";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .schedule_table {
      table {
        .table-header {
          td {
            padding: 17px 15px;
            font-size: 15px;
          }

          th {
            padding: 17px 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .schedule_table {
      table {
        display: block;
        overflow-x: auto;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .widget_title {
      font-size: 22px;
    }
    .schedule_table {
      table {
        td {
          font-size: 14px;
        }
      }
    }
  }

  /* tabs  */
  .react-tabs {
    position: relative;
    margin-bottom: 30px;

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
    width: 100%;
    height: auto;
    background: #222231;
    margin-bottom: 42px;
  }

  .tab_btn_wrapper {
    display: flex;
    align-items: center;
  }

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

  .react-tabs__tab {
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    button {
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 110px;

    .react-tabs__tab {
      font-size: 14px;
      button {
        padding: 17px 12px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .section_title {
      margin-bottom: 35px;
    }

    .react-tabs__tab-list {
      flex-direction: column;
      align-items: flex-start;
      top: -390px;
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
  }
`

export default StakeHistoryStyleWrapper
