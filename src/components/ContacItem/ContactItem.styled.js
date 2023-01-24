import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 350px;
`;

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 4px;
  background-color: lightskyblue;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
