import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [itemName, setName] = useState("");
  const [itemQuantity, setQuantity] = useState(0);
  const [itemPrice, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [valorTotal, setvalorTotal] = useState(0);

  function addItem() {
    const novoItem = {
      nome: itemName,
      quantity: itemQuantity,
      price: parseFloat(itemPrice),
      id: id,
    };

    setId(id + 1);
    ///setItem((prev) => [...prev, novoItem]);
    const novaLista = [...item, novoItem]
    setItem(novaLista)
    localStorage.setItem("items", JSON.stringify(novaLista))
  }

  function removeItem(id) {
    const updateLista = item.filter((itemlista) => itemlista.id !== id);
    localStorage.setItem("items", JSON.stringify(updateLista))
    setItem(updateLista);
  }

  useEffect( () => {
    const lista = localStorage.getItem("items")
    
    if (lista) {
      setItem(JSON.parse(lista))
    }

  },[])

  useEffect(() => {
    const valores = item.reduce((valorAcumulado, itemLista) => {
      return valorAcumulado + itemLista.price * itemLista.quantity;
    }, 0);

    setvalorTotal(valores)
  },[item]);




  return (
    <div className="bg-[#2c2c2c] w-screen h-screen box-border flex gap-5 justify-center items-center">
      <div className="bg-white w-[400px] h-[350px] rounded-md flex gap-5 flex-col items-center">
        <h1 className="text-black font-semibold text-2xl">
          Calculadora de Gastos
        </h1>
        <input
          onChange={(event) => setName(event.target.value)}
          id="input"
          className="w-[350px] h-[50px] rounded-md bg-[#272727] text-white text-center"
          type="text"
          placeholder="Digite o nome do Item"
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          id="input"
          className="w-[350px] h-[50px] rounded-md bg-[#272727] text-white text-center"
          type="text"
          placeholder="Digite o valor do Item"
        />
        <input
          onChange={(event) => setQuantity(event.target.value)}
          id="input"
          className="w-[350px] h-[50px] rounded-md bg-[#272727] text-white text-center"
          type="text"
          placeholder="Digite a quantidade do Item"
        />
        <button
          onClick={addItem}
          className="w-[150px] h-[40px] bg-[#272727] text-white text-[15px] rounded-md transition-all font-medium cursor-pointer"
        >
          Adicionar na Lista
        </button>
      </div>

      <div className="bg-white w-[800px] flex flex-col h-[500px] rounded-md">
        <p className="text-black  font-bold text-center text-[20px]">
          GASTOS DO MÊS | VALOR TOTAL DE GASTOS: {valorTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
        </p>

        <div className="w-full h-[460px] grid grid-cols-3 p-3 gap-3 overflow-y-auto">
          {item.map((itemLista) => (
            <div
              key={itemLista.id}
              className="w-[230px] mr-2 h-[160px] bg-[#202020] border-2 border-[#5e5e5e] rounded-[10px] flex flex-col justify-center p-3"
            >
              <h1 className="text-[15px] font-semibold text-white items-start">
                Nome: {itemLista.nome}
              </h1>
              <h1 className="text-[15px] font-semibold text-white  items-start">
                Quantidade: {itemLista.quantity}
              </h1>
              <h1 className="text-[15px] font-semibold text-white  items-start">
                Preço: {itemLista.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </h1>
              <button
                onClick={() => removeItem(itemLista.id)}
                className="bg-blue-600 text-white font-semibold p-1 rounded-md transition-all mt-5 cursor-pointer text-center"
              >
                REMOVER
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
