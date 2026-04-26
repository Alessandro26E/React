import "./status.css";
import appContext from "../../context/appContext";
import { useContext } from "react";

function Status() {

  const {setState, state, length} = useContext(appContext)
  
  return (
    <div className="w-full h-[50px] flex items-center justify-between">

      <div className="bg-[#efeff0] w-[200px] h-[35px] rounded-[10px] ml-7 p-2 flex items-center gap-3 justify-center">
        <button onClick={() => setState("Todas")} className={` ${state === "Todas" ? "bg-white text-black inset-shadow-xs" : "text-[#7c7c7c]"} transition delay-100 duration-200 ease  text-[11px] font-Inter  cursor-pointer font-semibold w-[40px] h-[25px] w-[70px] rounded-[8px]`}>Todas</button>
        <button onClick={() => setState("Ativas")} className={` ${state === "Ativas" ? "bg-white text-black inset-shadow-xs" : "text-[#7c7c7c]"} transition delay-100 duration-200 ease  text-[11px] font-Inter text-[#7c7c7c] cursor-pointer font-semibold w-[70px] h-[25px] rounded-[8px]`}>Ativas</button>
        <button onClick={() => setState("Concluidas")} className={` ${state === "Concluidas" ? "bg-white text-black inset-shadow-xs" : "text-[#7c7c7c]"} transition delay-100 duration-200 ease text-[10px] font-Inter text-[#7c7c7c] cursor-pointer font-semibold w-[80px]  h-[25px] rounded-[8px]`}>Concluidas</button>
      </div>

      <div className=" w-[70px] h-[30px] flex gap-1 justify-center items-center font-Inter mr-8">
        <h1 className="text-[13px] font-Inter font-semibold">{length}</h1>
        <p className="text-[13px] font-Inter p-0 text-[#808080]">restantes</p>
      </div>

    </div>
  );
}

export default Status;
