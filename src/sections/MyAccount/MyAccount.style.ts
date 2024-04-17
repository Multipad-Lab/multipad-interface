import styled from "styled-components"

const MyAccountStyleWrapper = styled.section`
  background-color: #090b1a;
  padding: 50px 0 50px;

  .action {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .spinning-overlay {
    background: rgba(0, 0, 0, 0.2);
  }

  .schedule_table {
    min-height: 300px;

    table {
      .table-row {
        cursor: pointer;

        &:hover {
          background: #0e1128;
        }
      }

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
`

export default MyAccountStyleWrapper
