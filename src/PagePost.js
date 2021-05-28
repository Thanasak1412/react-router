import LayoutPage from "./LayoutPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PagePost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { title, body } = post;

  async function getPostId(postId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const postJson = await res.json();
    setPost(postJson);
  }

  async function getCommentId(postId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const commentJson = await res.json();
    setComments(commentJson);
  }

  useEffect(() => {
    getPostId(postId);
  }, [postId]);

  useEffect(() => {
    getCommentId(postId);
  }, [postId]);

  const commentElem = comments.map(({ name, email, body, id }) => {
    return (
      <div key={id} className="comment">
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>Comment: {body}</p>
      </div>
    );
  });

  return (
    <LayoutPage>
      <h2>{title}</h2>
      <p>{body}</p>
      <hr />
      {commentElem}
    </LayoutPage>
  );
}

export default PagePost;
