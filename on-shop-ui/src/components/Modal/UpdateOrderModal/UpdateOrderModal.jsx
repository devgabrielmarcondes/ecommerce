import Notification from "../Notification";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalRedux";
import CloseIcon from "@material-ui/icons/Close";
import { updateOrderStatus } from "../../../redux/apiCalls";

import {
  Agreement,
  Button,
  CloseButton,
  Form,
  Header,
  Label,
  Message,
  Modal,
  ModalContainer,
  Radio,
} from "./styles";

const UpdateOrderModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const modal = useSelector((state) => state.modal);
  const orderUrl = location.pathname.split("/").at(-1);
  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderUrl)
  );

  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdate(true);
    const orderId = order?._id;
    updateOrderStatus(orderId, status, dispatch);
    setLoading(true);
    setTimeout(() => {
      updateHelper();
      history.push("/orders");
    }, 2000);
  };
  const updateHelper = () => {
    setLoading(false);
    dispatch(closeModal());
  };
  const handleClose = () => {
    setStatus({});
    dispatch(closeModal());
  };
  const handleInput = (e) => {
    setStatus({ [e.target.name]: e.target.value });
  };

  return (
    <ModalContainer display={modal.open ? "flex" : "none"}>
      <Notification open={update} setOpen={setUpdate} type="update" />
      <Modal>
        <CloseButton>
          <CloseIcon onClick={handleClose} />
        </CloseButton>
        <Header>Update Order Status</Header>
        <Form onSubmit={handleUpdate}>
          <Message>
            {order.status === "To Ship"
              ? "Are you sure you want to cancel your order? Your card will not be charge."
              : order.status === "Shipped"
              ? "Did you received your order/s properly? If you select 'yes', your card will be charge."
              : null}
          </Message>
          <Agreement>
            <Label htmlFor="yes">
              <Radio
                type="radio"
                name="status"
                value={
                  order.status === "To Ship"
                    ? "Cancelled"
                    : order.status === "Shipped"
                    ? "Delivered"
                    : null
                }
                onChange={handleInput}
                id="yes"
                required
              />
              Yes
            </Label>
            <Label htmlFor="no">
              <Radio
                type="radio"
                name="status"
                value={order.status}
                onChange={handleInput}
                id="no"
                required
              />
              No
            </Label>
          </Agreement>
          <Button type="submit" disabled={loading ? true : false}>
            Update Order
          </Button>
        </Form>
      </Modal>
    </ModalContainer>
  );
};

export default UpdateOrderModal;
