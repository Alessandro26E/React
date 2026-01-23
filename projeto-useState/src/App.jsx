import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  const [InvestimentoNome, setInvestimentoNome] = useState("");
  const [OrigemNome, setOrigem] = useState("");
  const [Investimentos, setListaInvestimentos] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [contador, setContador] = useState(0)

  function addInvestimento() {
    if (!OrigemNome || !InvestimentoNome) return;

    const investimento = {
      nome: InvestimentoNome,
      origem: OrigemNome,
    };

    setListaInvestimentos((lista) => {
      return [...lista, investimento];
    });
    
    setInvestimentoNome("");
    setOrigem("")
    setVisible(false);
  }

  function addContador() {
    setContador(contador + 1)
  }

  return (
    <div className="w-full h-full ">
      <div className="w-[200px] h-[100px] bg-amber-600 m-2 rounded-2xl shadow flex flex-col justify-center">
        <h1 className="text-white">Contador: {contador}</h1>
        <button onClick={addContador} className="bg-blue-600 w-[100px] rounded-md text-white p-1">Clique aqui</button>
      </div>
      
      <div className="grid grid-cols-3 gap-5">
        {Investimentos.map((investimento, posicao) => (
          <div className="shadow w-[300px] h-[150px] rounded-md" id={posicao}>
            <h1 className="font-bold text-center">{investimento.nome}</h1>
            <p>Origem: {investimento.origem}</p>
          </div>
        ))}
      </div>

      <Dialog open={isVisible} onOpenChange={setVisible}>
        <DialogTrigger>
          <button className="absolute right-0 bottom-0 m-5 bg-[#1d1d1d] rounded-[50%] h-[40px] w-[40px] text-white text-center cursor-pointer">
            +
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Crie um novo Investimento</DialogTitle>

          <div className="flex flex-col gap-2 items-center">
            <input
              value={InvestimentoNome}
              onChange={(event) => setInvestimentoNome(event.target.value)}
              className="bg-[#e6e6e6] w-full rounded-md p-2"
              type="text"
              placeholder="Digite o nome"
            />

            <input
              value={OrigemNome}
              onChange={(evento) => setOrigem(evento.target.value)}
              className="bg-[#e6e6e6] w-full rounded-md p-2"
              type="text"
              placeholder="Origem"
            />

            <button
              onClick={addInvestimento}
              className="bg-blue-500 w-[200px] rounded-md p-2 text-white font-bold cursor-pointer"
            >
              Adicionar Investimento
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
