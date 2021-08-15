import styled from 'styled-components';

export const RangeWrapper = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 100px 1fr 160px;

  * {
    font-size: 12px;
    font-family: "Roboto Mono";
  }

  button {
    border: 0;
    outline: 0;
  }
`;

export const RangeTypeSelectors = styled.div`
  display: flex;
  justify-content: space-between;
`;