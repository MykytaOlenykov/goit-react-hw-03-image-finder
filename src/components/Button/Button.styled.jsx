import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  transition: all ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  width: 100%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentBtn};
  }
`;
