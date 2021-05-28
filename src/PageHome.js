import LayoutPage from "./LayoutPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PageHome() {
  const [posts, setPosts] = useState([]);

  async function getPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await res.json();
    setPosts(jsonData);
  }

  useEffect(() => {
    getPost();
  }, []);

  const postElem = posts.map(({ body, id, title }) => {
    return (
      <div key={id} className="post">
        <h3>
          <Link to={`posts/${id}`}>{title}</Link>
        </h3>
        <p>{body}</p>
      </div>
    );
  });

  return (
    <LayoutPage>
      <h2>Home หน้าแรกของหมู่เฮา</h2>
      {postElem}
    </LayoutPage>
  );
}

export default PageHome;
