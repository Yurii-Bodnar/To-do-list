import { styled } from "styled-components";

export const Container = styled.div`
  padding: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 5px;
  color: cadetblue;
`;
export const Box = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
export const Input = styled.input`
  width: 50vw;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;
export const Button = styled.button`
  width: 60px;
  background: deepskyblue;
  padding: 10px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  &:hover {
    background: blue;
  }
`;
