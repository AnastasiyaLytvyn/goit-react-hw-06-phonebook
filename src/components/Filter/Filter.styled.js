import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 340px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid lightseagreen;
  }
`;
