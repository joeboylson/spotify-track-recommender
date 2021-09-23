import styled from 'styled-components';

export const InputWrapperLabel = styled.label`
    display: block;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const InputvalueLabelContainer = styled.div`
    display: flex;
    border: 1px solid #c3c3c3;;
    height: 22px;

    span {
        padding: 4px;
    }

    span:first-child {
        border-right: 1px solid #c3c3c3;;
    }
`;