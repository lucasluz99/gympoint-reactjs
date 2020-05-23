import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  background: none;
  color: ${(props) => (props.color ? props.color : '#dc3545')};

  font-size: 14px;
  border: 0;
  margin-right: 10px;
`;
