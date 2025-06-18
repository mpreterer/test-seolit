import { createContext, useMemo, useState } from "react";
import { POSTS } from "../constants/posts";
import type { IPost } from "../types/posts";

interface PostsContextProps {
  posts: IPost[];
  deletePost: (id: number) => void;
  editPost: (updatedPost: IPost) => void;
  addPost: (updatedPost: IPost) => void;
}

const defaultContext: PostsContextProps = {
  posts: POSTS,
  deletePost: () => {},
  editPost: () => {},
  addPost: () => {},
};

export const PostsContext = createContext<PostsContextProps>(defaultContext);

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>(POSTS);

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const editPost = (updatedPost: IPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const addPost = (updatedPost: IPost) => {
    setPosts((prev) => [...prev, updatedPost]);
  };

  const contextValue = useMemo(
    () => ({
      posts,
      deletePost,
      editPost,
      addPost,
    }),
    [posts]
  );

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};
