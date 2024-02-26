import { useLoaderData, Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UpdatePostForm from "./UpdatePostForm";


const editPost = async ({ request, id }: any) => {
  const formData = await request.formData();
  const currentId = formData.get('id')
  const newPostInner = {
    id: currentId,
    content: formData.get("content"),
  };

  const newPost = await fetch(`http://localhost:7070/posts/${currentId}`, {
    method: "PUT",
    body: JSON.stringify(newPostInner),
  });

  return redirect("/");
};
export { editPost }


export default function SinglePost() {
  const currPost = useLoaderData().post;
  const [state, setState] = useState<string>("initial");
  const navigate = useNavigate()

  const deletePost = async (id: number) => {
    const response = await fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    setState("initial");
  }, []);

  const onClick = (state: string) => {
    setState(state);
  };

  return (
    <div className="single-post">
      <div className="post" key={currPost.id}>
        <Link to="/" className="close-curr-post">
          &#10006;
        </Link>
        <div className="post-onwner">
          <img
            src="https://loremflickr.com/320/240"
            className="post-owner-image"
          />
          <div className="post-onwner-name">Lorem ipsum dolor sit.</div>
        </div>
        <div className="post-title">{currPost.content}</div>

        {state === "initial" ? (
          <div className="post-actions">
            <div className="post-edit-btn post-action-btn" onClick={() => onClick('edit')}>
              Изменить
            </div>
            <Link
              to={"/"}
              className="post-delete-btn post-action-btn post-action-btn-red"
              onClick={() => deletePost(currPost.id)}
            >
              Удалить
            </Link>
          </div>
        ) : (
          <UpdatePostForm id={currPost.id} content={currPost.content} onClick={onClick}></UpdatePostForm>
        )}
      </div>
    </div>
  );
}
