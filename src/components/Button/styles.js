import styled from 'styled-components';
import { darken } from 'polished';

export const StyledButton = styled.button`
  border: 0;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  font-weight: bold;
  transition: background 200ms linear;

  &:hover {
    background-color: ${(props) => darken(0.05, props.background)};
  }
`;
