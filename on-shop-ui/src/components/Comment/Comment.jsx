// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Avatar, Container, Date, Details, Name, Text } from "./styles";

// const Comment = ({ comment }) => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchComment = async () => {
//       const res = await axios.get(`/users/find/${user.userId}`);
//       setUser(res.data);
//     };
//     fetchComment();
//   }, [user.userId]);

//   return (
//     <Container>
//       <Avatar src="#" />
//       <Details>
//         <Name>
//           {user.name} <Date>1 day ago</Date>
//         </Name>
//         <Text>{comment.desc}</Text>
//       </Details>
//     </Container>
//   );
// };

// export default Comment;
