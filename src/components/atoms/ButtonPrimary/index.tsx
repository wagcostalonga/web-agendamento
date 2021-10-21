import React from "react";

import { Container } from "./styles";

interface ButtonPrimaryProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default ButtonPrimary;
