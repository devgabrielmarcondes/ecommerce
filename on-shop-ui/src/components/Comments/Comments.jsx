import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../redux/apiCalls";
import axios from "axios";
import Comment from "../Comment/Comment";
import SendIcon from "@material-ui/icons/Send";
import { Avatar, Container, Input, NewComment, Button } from "./styles";

const Comments = ({ productId }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [commentDesc, setCommentDesc] = useState("");
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

  const handleClick = async (e) => {
    e.preventDefault();
    await addComments(commentDesc, dispatch);
    // await axios.post(`/comments/${productId}`, {desc: commentDesc});
  };

  return (
    <Container>
      {currentUser === null ? null : (
        <NewComment>
          <Avatar src="#" />
          <Input
            placeholder="Add a comment..."
            onChange={(e) => setCommentDesc(e.target.value)}
          />
          <Button onClick={handleClick}>
            <SendIcon />
          </Button>
        </NewComment>
      )}

      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
