import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <AppRoutes />
      {/* <h3 className="text-red-800" >ttt</h3> */}
    </div>
  );
}

export default App;
