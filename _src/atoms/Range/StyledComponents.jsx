import styled from 'styled-components';

export const DualRangeContainer = styled.div`
  width: 100%;
  height: 16px;
  position: relative;
  
  input {
    width: 100%;
    position: absolute;
    pointer-events: none;
    background-color: transparent;
  }
  
  input::-webkit-slider-thumb {
    pointer-events: all;
  }
  
  .input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
  }
`;
