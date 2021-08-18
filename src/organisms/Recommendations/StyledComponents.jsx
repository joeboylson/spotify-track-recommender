import styled from "styled-components";

export const RecommendationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TrackWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 24px;
  gap: 12px;

  button {
    width: 24px;
    height: 24px;
  }
`;
