import { useContext, useState } from "react";
import { Post } from "../../components/Post/Post";
import s from "./MainPage.module.scss";
import { PostsContext } from "../../context/PostsContext";
import type { IPost } from "../../types/posts";
import cn from "classnames";
import { Button } from "../../components/Button/Button";

export const MainPage = () => {
  const { posts, addPost } = useContext(PostsContext);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClick = () => {
    setIsCreatePost(true);
  };

  const handleSave = () => {
    if (!title || !body) return;

    const newPost: IPost = {
      id: new Date().getTime(),
      title,
      body,
    };

    addPost(newPost);
    setIsCreatePost(false);
    setTitle("");
    setBody("");
  };

  const handleCancel = () => {
    setIsCreatePost(false);
  };

  return (
    <main className={s.content}>
      {!isCreatePost && <Button onClick={handleClick}>Предложить новость</Button>}
      {isCreatePost && (
        <div className={s.createForm}>
          <input
            className={cn(s.input, s.title)}
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={cn(s.input, s.desc)}
            placeholder="Описание"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button className={s.button} onClick={handleSave}>
            Сохранить
          </Button>
          <Button className={s.button} onClick={handleCancel}>
            Отменить
          </Button>
        </div>
      )}

      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  );
};
