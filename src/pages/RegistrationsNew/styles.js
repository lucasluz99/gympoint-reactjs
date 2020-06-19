import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    svg {
      margin-right: 7px;
    }
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
  label {
    margin-bottom: 7px;
  }
  > div {
    margin-bottom: 20px;
    span {
      display: block;
      margin: 5px 0;
    }
  }

  #flex,
  #flex33 {
    display: flex;

    > div {
      width: 50%;
      margin-right: 10px;
    }
    .react-datepicker-wrapper {
      width: 100%;
    }
    > div:last-child {
      margin: 0;
    }
  }

  #flex33 {
    > div {
      width: 33%;
    }
  }
`;
