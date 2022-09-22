 import axios from "axios";
 import React, { useEffect, useState } from "react";
 import { useSelector } from "react-redux";
 import Comment from "../Comment/Comment";

 import { Avatar, Container, Input, NewComment } from "./styles";

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
    await axios.post(`/comments/${productId}`, {desc: commentDesc});

  };

   return (
     <Container>
        {currentUser === null ? null : (
        <NewComment>
            <Avatar src="#" />
         <Input placeholder="Add a comment..." onChange={(e) => setCommentDesc(e.target.value)} />
         <button></button>
       </NewComment>
        )}
       
       {comments.map((comment) => (
         <Comment key={comment._id} comment={comment} />
       ))}
     </Container>
   );
 };

 export default Comments;
