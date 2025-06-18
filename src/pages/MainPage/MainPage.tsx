import { useContext } from "react";
import { Post } from "../../components/Post/Post";
import s from "./MainPage.module.scss";
import { PostsContext } from "../../context/PostsContext";

export const MainPage = () => {
  const { posts } = useContext(PostsContext);

  return (
    <main className={s.content}>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  );
};
