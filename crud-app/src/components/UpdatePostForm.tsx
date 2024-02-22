import { Form } from "react-router-dom";

interface props {
  id: number;
  content: string;
  onClick: (state: string) => void
}

export default function UpdatePostForm({ id, content, onClick }: props) {
  return (
    <div className="edit-area">
      <div className="close-edit-area" onClick={() => onClick('initial')}>&#10006;</div>
      <Form action={`/posts/${id}`} method="PUT">
        <textarea
          name="content"
          className="input-form-area"
          cols={5}
          rows={5}
          defaultValue={content}
        ></textarea>
        <input type="submit" className="classic-btn" value={"Сохранить"} />
        <input type="hidden" name={"id"} value={id} />
      </Form>
    </div>
  );
}
