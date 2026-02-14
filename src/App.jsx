// import { useState } from "react";
import { RouterProvider } from "react-router"
import { routes } from "./routes"


function App() {
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
