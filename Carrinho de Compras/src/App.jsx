import { useEffect, useState } from "react";
import "./App.css";
console.log("Oi")
function App() {
  const [lista, setLista] = useState([]);
  const [listaCarrinho, setListaCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0)
  
  async function getProdutos() {
    try {
      const resp = await fetch("/produtos.json");
      const data = await resp.json();

      if (resp.status == 200) {
        const novalista = [...lista, ...data];

        const listaValoresConvertidos = novalista.map((produtos) => {
          return {...produtos, valor: produtos.valor};
        });

        setLista(listaValoresConvertidos);
      }
    } catch (error) {
      console.log("Erro ao buscar produtos:", error);
      return;
    }
  }

  function addCartProduct(produtoNome, produtoPreco, ProdutoId, produtoQuantity, produtoValorUnitario) {
    const produtosExistentes = listaCarrinho.find(produto => produto.id === ProdutoId)

    if (produtosExistentes) {
      const listaAtualizada = listaCarrinho.map((item) => {
        if (item.id === ProdutoId) {
          const listanova = {...item, quantidade: item.quantidade + 1, valor:  item.valorUnitario *  item.quantidade + item.valorUnitario}
          return {...listanova, valor: listanova.valor}
        }
        return item
      })

      setListaCarrinho(listaAtualizada)
    } else {
      const novalista = {
        nome: produtoNome,
        valor: produtoPreco,
        id: ProdutoId,
        quantidade: produtoQuantity,
        valorUnitario: produtoValorUnitario,
      };
    

    setListaCarrinho([...listaCarrinho, novalista]);
    }

    return listaCarrinho
  }


  function removeCartProduct(productId) {
   const produtosExistentes = listaCarrinho.find(produto => produto.id === productId)

   if (!produtosExistentes) return

    if (produtosExistentes.quantidade === 1) {
      const novaLista = listaCarrinho.filter((item) => item.id !== productId)

      setListaCarrinho(novaLista)
    } else {
      const novaLista = listaCarrinho.map((item) => {

      if (item.id === productId) {
        return {...item, quantidade: item.quantidade - 1, valor: item.valor - item.valorUnitario}
      } 

      return item

      })

      setListaCarrinho(novaLista)
    }
  }



  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    const total = listaCarrinho.reduce((acumulado, item) => acumulado + item.valor, 0);
    setValorTotal(parseFloat(total))

  }, [listaCarrinho]);

  return (
    <div className="w-screen h-screen bg-[#252525] gap-5 flex items-center justify-center">
      <div className="h-[700px] w-[500px] gap-2 rounded-2xl bg-white flex items-center flex-col">
        <h1 className="font-medium text-black m-1">Catalog de Produtos</h1>

        {lista.map((produtos) => (
          <div className="w-[450px] h-[60px] bg-[#d4d4d4] rounded-md flex items-center justify-between ">
            <div className="flex flex-col items-start justify-center p-3">
              <h1 className="font-bold text-black">{produtos.nome}</h1>
              <p>{produtos.valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
            </div>

            <button
              onClick={() =>
                addCartProduct(
                  produtos.nome,
                  produtos.valor,
                  produtos.id,
                  produtos.quantidade,
                  produtos.valorUnitario
                )
              }
              className="bg-blue-700 text-white font-medium p-2 rounded-md mr-3 cursor-pointer"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white w-[500px] h-[700px] rounded-2xl flex gap-4 items-center flex-col">
        <h1 className="font-medium text-black m-1">Carrinho de Compras</h1>
        <h1 className="font-medium">Valor total de Compras: {valorTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h1>

        {listaCarrinho.map((produtos) => (
          <div
            id={produtos.id}
            key={produtos.id}
            className="w-[450px] h-[75px]  bg-[#d4d4d4] rounded-md flex items-center justify-between "
          >
            <div className="flex flex-col items-start justify-center p-3">
              <h1 className="font-bold text-black">{produtos.nome}</h1>
              <p>{produtos.valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
              <p className="font-semibold">Quantidade: {produtos.quantidade}</p>
            </div>

            <button onClick={() => removeCartProduct(produtos.id)} className="bg-red-700 text-white font-medium p-2 rounded-md mr-3 cursor-pointer">
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
