import styled from 'styled-components';

export const ListTitle = styled.h3`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  padding: 0 16px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px dashed #b5b5b5;
`;
