import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
  > div {
    display: flex;
    align-items: center;

    #checkbox-wrapper {
      display: flex;
      align-items: center;
      span {
        color: #444;
        font-weight: bold;
        font-size: 15px;
        margin-left: 10px;
      }

      input {
        transform: scale(1.5);
      }

      margin-right: 15px;
    }
  }

  button {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7px;
    }
    border: 0;
    margin-left: 15px;
    background-color: ${colors.primary};
    padding: 0 10px;
    height: 40px;
    background: ${(props) => props.background};
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
  }
`;
