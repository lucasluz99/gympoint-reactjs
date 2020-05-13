import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.header`
  padding: 20px;
  display: flex;
  background-color: ${colors.light};
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  img {
    width: 200px;
    padding-right: 30px;
    border-right: 1px solid ${colors.border};
  }
`;

export const Menu = styled.nav`
  margin-left: 30px;
  display: flex;
`;

export const MenuItem = styled(Link)`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.active ? `${colors.primary}` : `${colors.menuItem}`};
  margin-right: 20px;

  &:hover {
    color: ${colors.primary};
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;

  p {
    color: ${colors.menuItem};
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    display: block;
    color: ${colors.delete};
    cursor: pointer;
    &:hover {
      color: ${darken(0.1, colors.delete)};
    }
  }
`;
