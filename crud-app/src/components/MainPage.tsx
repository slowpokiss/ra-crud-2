import { Link, useLoaderData } from "react-router-dom";
import './MainPage.css'


interface postsIterface {
  id: number;
  content: string;
}

export default function MainPage() {
  let posts = useLoaderData();

  return (
    <>
      <div className="create-post-block">
        <div className="create-post-link">
          <Link to="/posts/new" className="create-post classic-btn">
            Создать пост
          </Link>
        </div>
      </div>
      <div className="main-container">
        <div className="posts">
          {posts.map((el: postsIterface) => {
            return (
              <Link to={`/posts/${el.id}`} className="post" key={el.id}>
                <div className="post-onwner">
                  <img
                    src="https://loremflickr.com/320/240"
                    className="post-owner-image"
                  />
                  <div className="post-onwner-name">Lorem ipsum dolor sit.</div>
                </div>
                <div className="post-title">{el.content}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
