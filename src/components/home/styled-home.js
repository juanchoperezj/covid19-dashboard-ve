import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center';
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //   width: 100vw;
  height: 50vh;
  // background-color: aquamarine;
  padding: 10px;

  @media all and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
