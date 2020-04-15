import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 100%;
  width: 48%;

  @media all and (max-width: 850px) {
    width: 85%;
    height: 48%;
  }
`;

export const CardContainer = styled.div`
  height: auto;
  width: auto;
  padding: 20px 20px 20px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #ecf0f1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 850px) {
    width: auto;
    height: auto;
  }

  @media all and (max-width: 350px) {
    width: auto;
    height: 20%;
  }
`;

export const Row = styled.div`
  height: 100%;
  width: 48%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media all and (max-width: 350px) {
    width: auto;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
