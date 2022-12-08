import Promotion from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import UpdateUserModal from "../../components/Modal/UpdateUserModal/UpdateUserModal";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import EditIcon from "@material-ui/icons/Edit";
import { openModal } from "../../redux/modalRedux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Container,
  MainContainer,
  Wrapper,
  Left,
  Center,
  Right,
  Title,
  TextContainer,
  Text,
  Action,
  Link,
  Navigation,
  Divider,
  Category,
  Value,
  EditButton,
  Header,
  InfoContainer,
  InfoText,
} from "./styles";

const Account = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleModal = (type) => dispatch(openModal(type));

  return (
    <Container>
      <UpdateUserModal />
      <Promotion />
      <Navbar />
      <MainContainer>
        <Title>Conta</Title>
        <TextContainer>
          <Left>
            <Action
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
              <Text>Voltar</Text>
            </Action>
          </Left>
          {currentUser.isAdmin && (
            <Right>
              <Action>
                <Link href="#">
                  <Text>Painel de administrador</Text>
                  <ArrowRightAltIcon style={{ marginLeft: "5px" }} />
                </Link>
              </Action>
            </Right>
          )}
        </TextContainer>
        <TextContainer style={{ marginBottom: "30px" }}>
          <Center>
            <Navigation className="active">
              <Text>Configurações</Text>
            </Navigation>
            <Divider></Divider>
            <Navigation>
              <Text
                onClick={() => {
                  history.push("/orders");
                }}
              >
                Histórico de Pedidos
              </Text>
            </Navigation>
          </Center>
        </TextContainer>
        <Wrapper>
          <Header>Informações de Usuário</Header>
          <InfoContainer>
            <Category>
              <InfoText>Primeiro nome:</InfoText>
            </Category>
            <Value>
              <InfoText>{currentUser?.name}</InfoText>
            </Value>
            <EditButton>
              <EditIcon onClick={() => handleModal("First Name")} />
            </EditButton>
          </InfoContainer>
          <InfoContainer>
            <Category>
              <InfoText>Sobrenome:</InfoText>
            </Category>
            <Value>
              <InfoText>{currentUser?.surname}</InfoText>
            </Value>
            <EditButton>
              <EditIcon onClick={() => handleModal("Last Name")} />
            </EditButton>
          </InfoContainer>
          <InfoContainer>
            <Category>
              <InfoText>Nome de usuário:</InfoText>
            </Category>
            <Value>
              <InfoText>{currentUser?.username}</InfoText>
            </Value>
            <EditButton>
              <EditIcon onClick={() => handleModal("Username")} />
            </EditButton>
          </InfoContainer>
          <InfoContainer>
            <Category>
              <InfoText>E-mail:</InfoText>
            </Category>
            <Value>
              <InfoText>{currentUser?.email}</InfoText>
            </Value>
            <EditButton>
              <EditIcon onClick={() => handleModal("Email")} />
            </EditButton>
          </InfoContainer>
          <InfoContainer>
            <Category>
              <InfoText>Senha:</InfoText>
            </Category>
            <Value>
              <InfoText>••••••••••</InfoText>
            </Value>
            <EditButton>
              <EditIcon onClick={() => handleModal("Password")} />
            </EditButton>
          </InfoContainer>
        </Wrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Account;
