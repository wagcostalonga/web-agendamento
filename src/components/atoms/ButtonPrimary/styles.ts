import styled from "styled-components";

export const Container = styled.button`
  margin: 2rem auto;
  text-align: center;
  height: 56px;
  padding: 0 2.5rem;
  background-color: var(--primary);
  color: #fff;
  border: 0;
  border-radius: 50px;
  box-shadow: 0px 10px 50px rgba(48, 59, 87, 0.16);
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
