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

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin-left: 45px;
`;

export const SimpleRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
