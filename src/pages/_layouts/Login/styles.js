import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #e44a68;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    width: 180px;
    margin-bottom: 30px;
    align-self: center;
  }

  form {
    div {
      margin-bottom: 20px;
      h1 {
        color: #222;
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      input {
        height: 40px;
        width: 100%;
      }
    }

    button {
      border: 0;
      color: #fff;
      background-color: #e44a68;
      height: 40px;
      width: 100%;
      border-radius: 4px;
      font-weight: bold;
      transition: background 200ms linear;

      &:hover {
        background-color: ${darken(0.1, '#e44a68')};
      }
    }
  }
`;
