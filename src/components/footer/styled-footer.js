import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.footerBackground};
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Label = styled.p`
  margin: 5px 0 5px 0;
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;
