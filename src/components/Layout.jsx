import styled from 'styled-components';

export const Layout = styled.div`
  background-color: white;

  width: 500px;
  margin: 40px auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FirstTitle = styled.h1`
  color: #333;
  text-align: center;

  margin-bottom: 15px;
`;

export const SecondTitle = styled.h2`
  color: #333;
  text-align: center;
`;
