import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 4px;
  background-color: lightskyblue;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    color: #fff;
  }
`;

// .error {
//   font-size: 12px;
//   color: lightcoral;
// }
