import styled from "styled-components"

const TabStyleWrapper = styled.div`
  .tag {
    border-radius: 5px;
    padding: 8px 12px;
    border: 1px solid white;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;

    &.riskless {
      border: none;
      background: rgba(99, 68, 232, 1);
    }
  }
`

export default TabStyleWrapper
