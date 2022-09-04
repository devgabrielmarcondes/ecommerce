// import { getOrders } from "../../redux/apiCalls";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { formatAmount } from "../../utility/formatAmount";
// import { formatDate } from "../../utility/formatDate";
// import {
//   Container,
//   Head,
//   Hr,
//   MainContainer,
//   Row,
//   Text,
//   Wrapper,
// } from "./styles";

// const OrderHistory = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const userID = useSelector((state) => state.user.currentUser._id);
//   useEffect(() => getOrders(userID, dispatch), [dispatch, userID]);
//   const order = useSelector((state) => state.order.orders);
//   return (
//     <Container>
//       <Head>
//         <Text>Order No.</Text>
//         <Text>Date</Text>
//         <Text>Amount</Text>
//         <Text>Status</Text>
//       </Head>
//       <Hr height={"2px"} />
//       <MainContainer>
//         <Wrapper>
//           {order?.length === 0 && (
//             <Text style={{ marginTop: "30px" }}>
//               You do not have any orders
//             </Text>
//           )}
//           {order?.map((order) => (
//             <Row
//               key={order._id}
//               onClick={() => {
//                 history.push(`/order/${order._id}`);
//               }}
//             >
//               <Text>#{order._id.substring(0, 8)}</Text>
//               <Text>{formatDate(order.createdAt)}</Text>
//               <Text>{formatAmount(order.amount)}</Text>
//               <Text>{order.status}</Text>
//             </Row>
//           ))}
//         </Wrapper>
//       </MainContainer>
//     </Container>
//   );
// };

// export default OrderHistory;
