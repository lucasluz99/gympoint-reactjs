import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  margin-left: 20px;
  display: flex;
  position: relative;
  align-items: center;
  svg {
    position: absolute;
    left: 3px;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding: 5px 0;
  padding-left: 30px;
  color: ${colors.input};
  border: 1px solid ${colors.border};
  width: 100%;
  font-size: 15px;
`;
