import React from "react";
import { useHistory } from "react-router";
import { VscChevronDown } from "react-icons/vsc";

import ButtonPrimary from "@components/atoms/ButtonPrimary";

import {
  Container,
  HeroContainer,
  WelcomeContainer,
  ButtonToBottom,
} from "./styles";

import logo from "@assets/images/logo-nissam.svg";

const Landing: React.FC = () => {
  const history = useHistory();

  function handleScrollToEnd() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <HeroContainer>
        <ButtonToBottom onClick={handleScrollToEnd}>
          <VscChevronDown size={40}/>
        </ButtonToBottom>
      </HeroContainer>

      <WelcomeContainer>
        <img src={logo} alt="Logo Nissam" />
        <p>Bem-vindo ao Web Agendamento Nissam</p>
        <h2>Concessionário Sinal Teste</h2>
        <ButtonPrimary
          type={"button"}
          onClick={() => history.push("/identifiquese")}
        >
          Entrar
        </ButtonPrimary>
        <span className="divider" />
        <small>Desenvolvido por Mobato Soluções</small>
      </WelcomeContainer>
    </Container>
  );
};

export default Landing;
