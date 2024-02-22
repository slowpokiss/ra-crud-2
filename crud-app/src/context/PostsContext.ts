import { createContext, SetStateAction } from "react";

interface postsInterface {
  id: number;
  content: string;
}

interface PostsContext {
    posts: postsInterface[];
    setPosts: (setStateAction: SetStateAction<postsInterface[]>) => void;
}

const PostsContext = createContext<PostsContext>({
  posts: [],
  setPosts: () => {}
});

export default PostsContext;
