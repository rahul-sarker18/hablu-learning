import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/mainrout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="xxl:w-4/5 xl:w-4/5 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
