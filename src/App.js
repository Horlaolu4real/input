import { useState } from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Header from "./components/Header";


function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  return (
    <div className="App">
      <Header />
      <Task
        input={input}
        setInput={setInput}
        array={array}
        setArray={setArray}
      />
      <TaskList setArray={setArray} array={array} />
    </div>
  );
}

export default App;
