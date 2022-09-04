// import Announcement from "../../components/Announcement/Announcement";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import OrderHistory from "../../components/OrderHistory/OrderHistory";
// import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// import { useHistory } from "react-router-dom";

// import {
//   Container,
//   MainContainer,
//   Wrapper,
//   Left,
//   Center,
//   Title,
//   TextContainer,
//   Text,
//   Action,
//   Navigation,
//   Divider,
// } from "./styles";

// const Orders = () => {
//   const history = useHistory();
//   return (
//     <Container>
//       <Announcement />
//       <Navbar />
//       <MainContainer>
//         <Title>Orders</Title>
//         <TextContainer>
//           <Left>
//             <Action
//               onClick={() => {
//                 history.push(-1);
//               }}
//             >
//               <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
//               <Text>back</Text>
//             </Action>
//           </Left>
//         </TextContainer>
//         <TextContainer style={{ marginBottom: "30px" }}>
//           <Center>
//             <Navigation>
//               <Text
//                 onClick={() => {
//                   history.push("/account");
//                 }}
//               >
//                 Account Settings
//               </Text>
//             </Navigation>
//             <Divider></Divider>
//             <Navigation className="active">
//               <Text>Order History</Text>
//             </Navigation>
//           </Center>
//         </TextContainer>
//         <Wrapper>
//           <OrderHistory />
//         </Wrapper>
//       </MainContainer>
//       <Footer />
//     </Container>
//   );
// };

// export default Orders;
