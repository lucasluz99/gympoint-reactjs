import { darken } from 'polished';
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: ${colors.light};
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
        color: ${colors.darkSecond};
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      input {
        height: 40px;
        width: 100%;
        font-size: 15px;
        color: ${colors.input};
        border: 1px solid ${colors.border};
        border-radius: 4px;
        padding: 10px;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 14px;
      }
    }

    button {
      border: 0;
      color: ${colors.light};
      background-color: ${colors.primary};
      height: 40px;
      width: 100%;
      border-radius: 4px;
      font-weight: bold;
      transition: background 200ms linear;

      &:hover {
        background-color: ${darken(0.1, colors.primary)};
      }
    }
  }
`;
