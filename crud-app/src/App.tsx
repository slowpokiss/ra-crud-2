import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  LoaderFunction,
  LoaderFunctionArgs,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import CreatePostPage from "./components/CreatePostPage";
import { addPost } from "./components/CreatePostPage";
import { editPost } from "./components/SinglePost";
import SinglePost from "./components/SinglePost";


const preLoader: LoaderFunction<any> = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const response = await fetch("http://localhost:7070/posts");
  return response.json();
};

const getCurrPostLoader: LoaderFunction<any> = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const response = await fetch(`http://localhost:7070/posts/${params.id}`);
  return response.json();
};

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/" loader={preLoader} element={<MainPage />}></Route>
      <Route
        path="/posts/new"
        action={addPost}
        element={<CreatePostPage />}
      ></Route>
      <Route
        path="/posts/:id"
        loader={getCurrPostLoader}
        action={editPost}
        element={<SinglePost />}
      />
    </>
  )
);

function App() {
  return <RouterProvider router={routerProv}></RouterProvider>;
}

export default App;
