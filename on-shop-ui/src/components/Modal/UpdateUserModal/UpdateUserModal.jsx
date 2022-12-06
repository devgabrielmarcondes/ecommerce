import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalRedux";
import { updateUserInfo } from "../../../redux/apiCalls";
import Notification from "../Notification/Notification";
import CloseIcon from "@material-ui/icons/Close";

import {
  Button,
  CloseButton,
  Form,
  FormContainer,
  Header,
  Input,
  InputContainer,
  ModalContainer,
} from "./styles";

const UpdateUserModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdate(true);
    const userID = currentUser?._id;
    const userInput = { ...input };
    setLoading(true);
    updateUserInfo(userID, userInput, dispatch);
    setTimeout(() => {
      updateHelper();
    }, 2000);
  };
  const updateHelper = () => {
    document.getElementById("modalForm").reset();
    setLoading(false);
    dispatch(closeModal());
  };
  const handleClose = () => {
    setInput({});
    dispatch(closeModal());
  };
  const handleInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };
  const type = () => {
    if (modal.type === "First Name") {
      return "text";
    } else if (modal.type === "Last Name") {
      return "text";
    } else if (modal.type === "Username") {
      return "text";
    } else if (modal.type === "Email") {
      return "email";
    } else if (modal.type === "Password") {
      return "password";
    }
  };
  const name = () => {
    if (modal.type === "First Name") {
      return "name";
    } else if (modal.type === "Last Name") {
      return "surname";
    } else if (modal.type === "Username") {
      return "username";
    } else if (modal.type === "Email") {
      return "email";
    } else if (modal.type === "Password") {
      return "password";
    }
  };
  const placeholder = () => {
    if (modal.type === "First Name") {
      return currentUser.name;
    } else if (modal.type === "Last Name") {
      return currentUser.surname;
    } else if (modal.type === "Username") {
      return currentUser.username;
    } else if (modal.type === "Email") {
      return currentUser.email;
    } else if (modal.type === "Password") {
      return "•••••••••••";
    }
  };
  return (
    <ModalContainer display={modal.open ? "flex" : "none"}>
      <Notification open={update} setOpen={setUpdate} type="update" />
      <FormContainer>
        <CloseButton>
          <CloseIcon onClick={handleClose} />
        </CloseButton>
        <Header>Update Your {modal.type}</Header>
        <Form onSubmit={handleUpdate} id="modalForm">
          <InputContainer>
            <Input
              type={type()}
              name={name()}
              placeholder={placeholder()}
              onChange={handleInput}
              required
              minLength={
                modal.type === "Password"
                  ? 8
                  : modal.type === "Username"
                  ? 5
                  : 2
              }
            />
          </InputContainer>

          <Button type="submit" disabled={loading ? true : false}>
            Update
          </Button>
        </Form>
      </FormContainer>
    </ModalContainer>
  );
};

export default UpdateUserModal;
