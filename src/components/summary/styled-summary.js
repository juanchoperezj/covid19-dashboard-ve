import styled from "styled-components";

export const RegionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  height: 100%;
  width: 76%;
  margin-top: 35px;
  margin-bottom: 35px;

  @media all and (max-width: 850px) {
    height: 50%;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  height: auto;
  width: 40%;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  background-color: #ecf0f1;

  @media all and (max-width: 850px) {
    width: auto;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const Label = styled.p`
  margin: 5px 0 5px 0;
`;

export const Quantity = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 400;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
