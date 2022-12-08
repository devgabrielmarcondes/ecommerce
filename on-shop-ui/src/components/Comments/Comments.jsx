/*import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "../Comment/Comment";
import SendIcon from "@material-ui/icons/Send";
import { Avatar, Container, Input, NewComment, Button } from "./styles";

const Comments = ({ productId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const textRef = useRef();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${productId}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [productId]);

  const handleClick = async (e) => {
    e.preventDefault();

    const newComment = textRef.current.value;

    try {
      await axios.post(window.location.origin + `api/comments/`, {
        desc: newComment,
        productId: productId,
        userId: currentUser._id,
        token: currentUser.accessToken,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {currentUser === null ? null : (
        <NewComment>
          <Avatar src="#" />
          <Input placeholder="Add a comment..." ref={textRef} />
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
*/
