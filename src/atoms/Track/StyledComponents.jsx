import styled from 'styled-components';

export const TrackContainer = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 24px;
  align-items: center;

  border: 1px solid #3f51b5;
  border-radius: 4px;

  img {
    border-right: 1px solid #3f51b5;
    border-radius: 4px 0px 0px 4px;
  }
`;
