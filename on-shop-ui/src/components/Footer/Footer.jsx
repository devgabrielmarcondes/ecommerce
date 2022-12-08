import React from "react";

import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
  Text,
  StyledLink,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Zafyr.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>
            <StyledLink to={`/`}>
            Home
          </StyledLink>
          </ListItem>
          <ListItem>
          <StyledLink to={`/cart`}>
            Carrinho
          </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`/products/men`}>
            Moda Masculina
          </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`/products/women`}>
            Moda Feminina
          </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`/products/acessories`}>
            Acessórios
          </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={`/account`}>
            Minha Conta
          </StyledLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          <Text>Av. Jornalista Roberto Marinho, 80 - Cidade Monções, São Paulo - SP</Text>
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          <Text>+55 (11) 99401-7676</Text>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          <Text>contato@gab_mrcd</Text>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
