import styled from "styled-components"

export const ConnectedButtonStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  @media (max-width: 1200px) {
    column-gap: 4px;
    justify-content: center;

    .btn-chains {
      background-color: #efefef;
    }

    // .display_name {
    //   width: 140px;
    // }
  }
`
