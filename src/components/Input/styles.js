import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 15px;
  color: ${colors.input};
  ${(props) =>
    props.readOnly &&
    `background-color: ${colors.border}; cursor: not-allowed;`};

  border: 1px solid ${colors.border};
  width: 100%;
  border-radius: 4px;
  padding: 10px;
`;
