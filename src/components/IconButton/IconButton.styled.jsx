import styled from 'styled-components';
import { IconButton } from './IconButton';

export const StyledIconBtn = styled(IconButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font: inherit;
  margin: 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};

  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
