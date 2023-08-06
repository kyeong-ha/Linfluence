import { useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get("http://192.168.219.105:5001/api").then((res) =>
      console.log(res.data.title)
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.REACT_APP_PORT}</h1>
      </header>
    </div>
  );
}

export default App;