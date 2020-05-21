import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;

  div {
    margin-left: auto;
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
    }
    svg:first-child {
      margin-right: 10px;
    }

    svg {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
