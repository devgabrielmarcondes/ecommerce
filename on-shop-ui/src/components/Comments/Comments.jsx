import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";

import { Avatar, Container, Input, NewComment } from "./styles";

const Comments = ({ productId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${productId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [productId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <NewComment>
        <Avatar src="#" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
