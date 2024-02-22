import "./Form.css";
import { Link, Form } from "react-router-dom";

export default function FormPage() {
  return (
    <Form action="/posts/new" method="POST">
      <textarea
        name="content"
        className="input-form-area"
        cols={5}
        rows={5}
      ></textarea>
      <input type="submit" className="classic-btn" value={"Опубликовать"} />
    </Form>
  );
}
