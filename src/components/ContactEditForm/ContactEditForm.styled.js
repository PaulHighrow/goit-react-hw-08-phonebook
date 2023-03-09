import { Field, Form } from 'formik';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: #8b0000;
  transition: var(--animation-global);

  width: 24px;

  &:hover,
  &:focus,
  &:active {
    color: #ff2400;
    filter: drop-shadow(var(--shadow-global));
  }

  position: absolute;
  right: -6%;
  top: -4%;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  fill: currentColor;
  width: 24px;
  height: 24px;
`;

export const ToastForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 8px;
`;

export const ToastInput = styled(Field)`
  font-size: 16px;
  line-height: 1.4;

  padding: 4px;
  border: 1px solid #cccaca;
  border-radius: 5px;
`;
