import styled from "styled-components";

import background from "@assets/images/background-nissam.png";

export const Container = styled.div`
  text-align: center;
`;

export const HeroContainer = styled.main`
  height: 100vh;
  background: url(${background}) no-repeat center / cover fixed;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonToBottom = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  background-color: var(--primary);
  box-shadow: 0px 20px 50px rgba(48, 59, 87, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;

  transition: all .2s;

  svg {
    color: #fff;
  }

  &:hover {
    filter: brightness(.9);
  }
`;

export const WelcomeContainer = styled.footer`
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  img {
    height: 4rem;
    width: auto;
  }

  p {
    text-transform: uppercase;
  }

  .divider {
    margin: 0.5rem 0;
    border-top: 2px solid var(--light-grey);
    width: 100%;
  }
`;
