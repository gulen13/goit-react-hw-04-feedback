import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const BtnItem = styled.button`
  width: 100px;
  font-size: medium;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ children }) => {
    switch (children) {
      case 'good':
        return 'green';
      case 'bad':
        return 'red';
      default:
        return 'yellow';
    }
  }};
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
  }
`;
