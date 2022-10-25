import styled from 'styled-components';
import design from '../../theme/desginSystem';

export const ButtonStyles = styled.button`
  border: none;
  text-transform: uppercase;
  width: 152px;
  height: 56px;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 22px;
  font-weight: 400;
  font-family: 'Jost';
  border-radius: 8px;
  background-color: ${design.colors.primary[2]};
`;
