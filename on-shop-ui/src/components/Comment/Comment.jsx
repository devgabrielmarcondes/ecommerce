/*import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Container, Date, Details, Name, Text } from "./styles";

const Comment = ({ comment }) => {
  const [user, setUser] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${currentUser._id}`);
      setUser(res.data);
    };
    fetchComment();
  }, [currentUser._id]);

  return (
    <Container>
      <Avatar src="#" />
      <Details>
        <Name>
          {user.name} <Date>1 day ago</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
*/
