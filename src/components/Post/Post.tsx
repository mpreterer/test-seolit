import { useCallback, useContext, useState, type FC } from "react";
import type { IPost } from "../../types/posts";
import cn from "classnames";
import s from "./Post.module.scss";
import { PostsContext } from "../../context/PostsContext";
import { Button } from "../Button/Button";

interface PostProps extends IPost {
  className?: string;
  isEditMode?: boolean;
}

export const Post: FC<PostProps> = ({ body, userId, title, className, id, isEditMode }) => {
  const [isEdit, setIsEdit] = useState(isEditMode);
  const [controlBody, setControlBody] = useState(body);
  const [controlTitle, setControlTitle] = useState(`${id} ${title}`);
  const { deletePost, editPost } = useContext(PostsContext);

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickDelete = useCallback(() => {
    deletePost(id);
  }, [id, deletePost]);

  const handleSave = () => {
    setIsEdit(false);
    editPost({ userId, id, body: controlBody, title: controlTitle });
  };

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setControlBody(e.target.value);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControlTitle(e.target.value);
  };

  return (
    <section className={cn(className, s.post)}>
      <div className={s.content}>
        {isEdit ? (
          <input
            onChange={handleChangeTitle}
            className={s.title}
            value={controlTitle}
          />
        ) : (
          <h3 className={s.title}>{controlTitle}</h3>
        )}
        {isEdit ? (
          <textarea
            onChange={handleChangeBody}
            className={s.body}
            value={controlBody}
          />
        ) : (
          <pre className={s.body}>{controlBody}</pre>
        )}
      </div>
      <div className={s.functional}>
        <button
          onClick={handleClickDelete}
          className={cn(s.button, s.buttonDelete)}
        >
          Удалить
        </button>
        {isEdit ? (
          <Button onClick={handleSave} className={s.button}>
            Сохранить
          </Button>
        ) : (
          <Button
            onClick={handleClickEdit}
            className={cn(s.button, s.buttonChange)}
          >
            Изменить
          </Button>
        )}
      </div>
    </section>
  );
};
