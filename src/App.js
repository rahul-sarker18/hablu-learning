import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/mainrout";

function App() {
  return (
    <div className="xxl:w-4/5 xl:w-4/5 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
