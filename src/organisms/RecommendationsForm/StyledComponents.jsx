import styled from 'styled-components';

export const RecommendationsFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 48px;

  .MuiStepper-root {
    padding: 0;
  } 

  .MuiStepContent-root {
    margin: 12px 0 0 0;
    padding: 0 12px 0 12px;
    border-left: 1px solid #c3c3c3;
  }

  .MuiCollapse-wrapperInner {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .MuiStepConnector-root {
    margin: 0;
  } 
`;

export const Instructions = styled.div`
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

export const RecommendationsFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .MuiAccordionSummary-content {
    margin: 0;
  }
`;

export const SubmitButtonWrapper = styled.div`
  position: fixed;
  bottom: 58px;
  right: 0;
  padding: 12px;

  @media only screen and (min-width: 928px) {
    right: calc(50% - 64px - 400px);
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .MuiSlider-root {
    margin-left: 8px !important;
    width: calc(100% - 8px);
  }

  .MuiSelect-root {
    padding-top: 0;
    padding-bottom: 2px;
  }
`;