import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, addTarefa] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  function addTask() {
    if (title) {
      const novaTask = {
        titulo: title,
        isCompleted: false,
        id: id,
      };

      addTarefa((prev) => [...prev, novaTask]);
      setId(id + 1);
    }
  }

  function removeTask(id) {
    const novaTask = tarefa.filter((task) => task.id !== id);
    return addTarefa(novaTask);
  }

  function marcarTarefa(id) {
    const novaTask = tarefa.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    return addTarefa(novaTask);
  }

  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-400 w-[450px] h-[600px] rounded-2xl">
        <div className="w-full h-[70px] flex justify-between items-center p-2">
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Nome da Tarefa"
            className="bg-gray-500 p-3 rounded-2xl text-white w-[280px] "
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white rounded-md cursor-pointer w-[130px] h-[50px] text-[20px] text-center"
          >
            Adicionar
          </button>
        </div>

        <div className="w-full h-[500px] flex flex-col gap-2 items-center">
          {tarefa.map((item) => (
            
            <div key={item.id} onClick={() => marcarTarefa(item.id)} className={`bg-white h-[50px] w-[430px] rounded-md flex justify-between items-center pr-1 ${item.isCompleted ? "h-[30px]" : ""}`}>
              <button className="h-full w-[300px] text-start p-1 cursor-pointer">{item.titulo}</button>
              <button onClick={() => removeTask(item.id)} className="bg-red-700 text-white rounded-md h-[45px] w-[100px] text-[17px] cursor-pointer">Remover</button>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
