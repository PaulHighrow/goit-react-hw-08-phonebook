import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai';
import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: #4682b4;
  transition: var(--animation-global);

  width: 24px;
  padding: 2px;

  &:hover,
  &:focus,
  &:active {
    color: #000080;
    filter: drop-shadow(var(--shadow-global));
  }
`;

export const EditIcon = styled(AiTwotoneEdit)`
  width: 24px;
  height: 24px;
`;

export const DeleteIcon = styled(AiTwotoneDelete)`
  width: 24px;
  height: 24px;
`;
