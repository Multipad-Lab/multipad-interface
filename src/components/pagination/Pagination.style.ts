import styled from "styled-components"

const PaginationStyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  &.pagination_wrapper {
    margin-top: 50px;
  }

  button {
    background: transparent;
    display: flex;
    width: 50px;
    height: 50px;
    font-family: "Russo One", sans-serif;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 500;
    border: 1px solid #2e2f3c;
    transition: all 0.4s;

    svg {
      font-size: 1.3rem;
    }

    &:hover,
    &.active {
      background-color: #2e2f3c;
      color: #a3ff12;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export default PaginationStyleWrapper
