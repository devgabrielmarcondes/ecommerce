import React from "react";

import { Send } from "@material-ui/icons";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <Title>Notícias Zafyr</Title>
      <Desc>Tenha atualizações diárias dos seus produtos favoritos.</Desc>
      <InputContainer>
        <Input placeholder="Seu email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
