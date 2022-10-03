import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "../Comment/Comment";
import SendIcon from "@material-ui/icons/Send";
import { Avatar, Container, Input, NewComment, Button } from "./styles";

const Comments = ({ productId }) => {
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
    await axios.post(`http://localhost:5000/api/comments/`, {
      commentDesc,
      productId,
    });
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
