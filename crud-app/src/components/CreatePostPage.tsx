import { Link, redirect } from "react-router-dom";
import FormPage from "./FormPage";

const addPost = async ({ request }: any) => {
  const formData = await request.formData();
  const newPostInner = {
    id: 1,
    content: formData.get("content"),
  };

  const newPost = await fetch("http://localhost:7070/posts", {
    method: "POST",
    body: JSON.stringify(newPostInner),
  });

  return redirect("/");
};

export default function CreatePostPage() {
  return (
    <div className="create-post-block">
      <div className="form-container">
        <div className="form-close-link">
          <Link to="/" className="close-form">&#10006;</Link>
        </div>
        <FormPage />
      </div>
    </div>
  );
}

export { addPost };
