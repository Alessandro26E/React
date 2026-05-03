import "./List.css";
import StatusSec from "../status_sec/status";
import { FaRegCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import AppContext from "../../context/appContext";
import api from "../../../api/api";

function List() {
  const [tarefa, setTarefa] = useState([]);
  const { length, setLength, state, setState } = useContext(AppContext);

  const inputRef = useRef();

  const addTarefa = async () => {
    await api.post("/tarefa", {
      tarefa: inputRef.current.value,
      concluida: false,
    });

    getTask();
  };

  async function getTask() {
    const tasks = await api.get("/tarefa");

    setTarefa(tasks.data);
  }

  async function updateRestantes() {
    if (state === "Todas") {
      setLength(tarefa.length);
    } else if (state === "Ativas") {
      setLength(tarefa.filter((task) => task.concluida === false).length);
    } else if (state === "Concluidas") {
      setLength(tarefa.filter((task) => task.concluida).length);
    }
  }

  useEffect(() => {
    getTask();
  }, []);

  useEffect(() => {
    updateRestantes();
  }, [state, tarefa]);

async function marcarTarefa(taskId) {
  // find retorna o objeto diretamente, filter retorna array
  const tarefaAtual = tarefa.find((task) => task.id === taskId)

  // Atualiza o estado mapeando o array e alternando só a tarefa certa
  setTarefa(tarefa.map((task) => 
    task.id === taskId 
      ? { ...task, concluida: !task.concluida } 
      : task
  ))

  // Envia pro banco com o valor alternado
  await api.put(`/tarefa/${taskId}`, {
    tarefa: tarefaAtual.tarefa,
    concluida: !tarefaAtual.concluida
  })
}

  async function removerTarefa(taskId) {
    await api.delete(`/tarefa/${taskId}`);
    getTask();
  }

  return (
    <div
      id="card-list"
      className="bg-[#ffffff] w-[600px] h-auto rounded-[20px] border-1 border-[#e6e3e3]"
    >
      <div className=" w-full h-[140px] ">
        <div
          id="input-div"
          className="flex items-center  justify-center gap-2 w-full h-[70px]"
        >
          <input
            ref={inputRef}
            id="input-card"
            type="text"
            placeholder="O que precisa ser feito hoje?"
            className="font-[Inter] pl-3 text-[14px] border-1 border-[#d6d6d6] rounded-[15px] w-[480px] h-[50px]"
          />
          <button
            onClick={addTarefa}
            id="button-add"
            className="bg-[#6E47E5] text-white font-[Inter] font-light text-2xl w-[50px] h-[45px] text-center rounded-[16px] cursor-pointer"
          >
            +
          </button>
        </div>
        <AppContext.Provider value={{ setState, state, length }}>
          <StatusSec />
        </AppContext.Provider>

        <div className="w-full mt-2 overflow-y-auto h-[440px]">
          {tarefa.map((task) => {
            if (state === "Todas") {
              return (
                <div
                  key={task.id}
                  id="task-div"
                  className="bg-[#ffffff]  border-1 border-[#e6e3e3] w-full h-[60px] flex pl-3"
                >
                  <div className="w-[520px] h-full items-center flex pl-2">
                    <button
                      onClick={() => marcarTarefa(task.id)}
                      className="cursor-pointer"
                    >
                      {task.concluida ? (
                        <FaRegCheckCircle className="text-[#6E47E5]" />
                      ) : (
                        <FaRegCircle className="text-[#6E47E5]" />
                      )}{" "}
                    </button>
                    <h1
                      className={`pl-2 text-[14px] font-Inter ${task.concluida ? "line-through" : ""}`}
                    >
                      {task.tarefa}
                    </h1>
                  </div>

                  <div className="h-full w-[70px] flex items-center justify-center ">
                    <button
                      onClick={() => removerTarefa(task.id)}
                      className="text-[15px] cursor-pointer"
                    >
                      {" "}
                      <FaRegTrashAlt className="text-[#c0c0c0]" />{" "}
                    </button>
                  </div>
                </div>
              );
            } else if (state === "Concluidas" && task.concluida) {
              return (
                <div
                  key={task.id}
                  id="task-div"
                  className="bg-[#ffffff] border-1 border-[#e6e3e3] w-full h-[60px] flex  pl-3"
                >
                  <div className="w-[520px] h-full items-center flex pl-2">
                    <button
                      onClick={() => marcarTarefa(task.id)}
                      className="cursor-pointer"
                    >
                      {task.concluida ? (
                        <FaRegCheckCircle className="text-[#6E47E5]" />
                      ) : (
                        <FaRegCircle className="text-[#6E47E5]" />
                      )}{" "}
                    </button>
                    <h1
                      className={`pl-2 text-[14px] font-Inter ${task.concluida ? "line-through" : ""}`}
                    >
                      {task.tarefa}
                    </h1>
                  </div>

                  <div className="h-full w-[70px] flex items-center justify-center ">
                    <button
                      onClick={() => removerTarefa(task.id)}
                      className="text-[15px] cursor-pointer"
                    >
                      {" "}
                      <FaRegTrashAlt className="text-[#c0c0c0]" />{" "}
                    </button>
                  </div>
                </div>
              );
            } else if (state === "Ativas" && !task.concluida) {
              return (
                <div
                  key={task.id}
                  id="task-div"
                  className="bg-[#ffffff] border-1 border-[#e6e3e3] w-full h-[60px] flex  pl-3"
                >
                  <div className="w-[520px] h-full items-center flex pl-2">
                    <button
                      onClick={() => marcarTarefa(task.id)}
                      className="cursor-pointer"
                    >
                      {task.concluida ? (
                        <FaRegCheckCircle className="text-[#6E47E5]" />
                      ) : (
                        <FaRegCircle className="text-[#6E47E5]" />
                      )}{" "}
                    </button>
                    <h1
                      className={`pl-2 text-[14px] font-Inter ${task.concluida ? "line-through" : ""}`}
                    >
                      {task.tarefa}
                    </h1>
                  </div>

                  <div className="h-full w-[70px] flex items-center justify-center ">
                    <button
                      onClick={() => removerTarefa(task.id)}
                      className="text-[15px] cursor-pointer"
                    >
                      {" "}
                      <FaRegTrashAlt className="text-[#c0c0c0]" />{" "}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
