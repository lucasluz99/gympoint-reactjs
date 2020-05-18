import styled from 'styled-components';
import colors from '../../../styles/colors';

export const StyledTd = styled.td`
  text-align: ${(props) => props.align};
  padding: 15px 0;
  color: ${colors.menuItem};
  border-bottom: 1px solid ${colors.border};
`;
