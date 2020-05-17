import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkButton = styled(Link)`
  display: flex;
  align-items: center;
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
`;
