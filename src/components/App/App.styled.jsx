import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 2;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
