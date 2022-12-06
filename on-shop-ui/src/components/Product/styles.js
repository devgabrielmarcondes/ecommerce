import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  max-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  background-color: #efefef;
  position: relative;
  ${mobile({ height: "250px", margin: "10px auto", minWidth: "230px" })}
`;
export const Info = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
`;
export const Name = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;
export const InfoText = styled.p`
  font-size: 0.9rem;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Image = styled.img`
  width: 100%;
  ${mobile({ width: "70%" })}
  z-index: 2;
  align-items: center;
  padding-bottom: 30px;
  margin: auto;
  cursor: pointer;
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #efefef;
  }
`;
