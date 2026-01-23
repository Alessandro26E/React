import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/Mercado-Livre-logo.png";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [input, setInput] = useState('')
  const [listaAtual, setLista] = useState([])
  const [categoriaAtual, setCategoria] = useState('')

  async function getProdutos() {
    const resp = await fetch("/produtos.json");
    const data = await resp.json();

    setProdutos(data)
    setLista(data)
  }

  useEffect(() => {
    getProdutos();
  }, []);
  
  useEffect(() => {
    let resultado = produtos;

    if (input.trim() !== "") {
      resultado = resultado.filter((p) =>
        p.titulo.toLowerCase().includes(input.toLowerCase())
      );
    }

    if (categoriaAtual !== "") {
      resultado = resultado.filter((p) => p.categoria === categoriaAtual);
    }

    setLista(resultado);
  }, [input, categoriaAtual, produtos]);
 
  return (
    <div className="bg-gray-900 h-screen w-screen overflow-hidden">
      <div className="bg-yellow-300 w-full h-[130px] flex flex-col justify-center items-center gap-5">
        <div className="w-full h-auto flex gap-5 mt-5 items-center justify-center">
          <img src={logo} className="w-[150px] h-[40px]" />

          <div className="bg-white w-[550px]  h-[45px] rounded-[3px] flex">
            <input
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Buscar Produtos, classes e muito mais..."
              className="w-full pl-3 h-[45px]"
            />

            <button onClick={getProdutos} className="cursor-pointer p-2">
              Buscar
            </button>
          </div>

          
        </div>
        <nav className=" w-full h-[50px]">
          <select id="selectCategory" onChange={(event) => setCategoria(event.target.value)} className="bg-transparent text-[#464646] rounded-md " name="caterogias" >
            <option value="">Categorias</option>
            <option value="Áudio">Audio</option>
            <option value="Móveis">Moveis</option>
            <option value="Celulares">Celulares</option>
            <option value="Informática">Informatica</option>
            <option value="Periféricos">Perifericos</option>
          </select>
        </nav>
      </div>

      <div className="bg-white w-full h-[88%] flex justify-center items-center">
        <div className=" w-[98%] h-[95%] gap-4 flex p-2">
          { listaAtual.map((produto) => (
            <div key={produto.id} id={produto.id} className="bg-white rounded-md w-[200px] h-[260px] flex gap-1 flex-col items-center drop-shadow-lg">
              <img
                src={produto.imagem}
                className="w-[140px] h-[140px]"
              />
              <h1 className="text-center text-[12px] font-semibold">
                {produto.titulo}
              </h1>
              <h1 className="text-center text-[12px] font-semibold">{Number(produto.preco).toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</h1>
              <h1 className="text-center text-[12px] font-semibold">
                Categoria: {produto.categoria}
              </h1>
              <h1 className="text-center text-[12px] font-semibold">
                Avaliação: {produto.avaliacao}
              </h1>
              <h1 className="text-center text-[12px] font-semibold">
                Estoque: {produto.estoque}
              </h1>
              <button className="bg-gray-900 text-white p-2 rounded-md mb-2 cursor-pointer">Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
