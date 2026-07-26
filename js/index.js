const nomeClient = "Marcos";
const accountId = undefined;

const data = new Date().toLocaleString("pt-BR");

const contas = [
  { nome: "Pedro", saldo: 34, transacoes: [] },
  { nome: "Maria", saldo: 235, transacoes: [] },
  { nome: "João", saldo: 100, transacoes: [] },
  { nome: "Marcos", saldo: 50, transacoes: [] },
  { nome: "Alex", saldo: 650, transacoes: [] },
];

const addTransacao = (usuario, tipo, infos) => {
  const user = contas.find((u) => u.nome === usuario);
  console.log(user);
  if (!user) {
    console.log("Não foi possivel encontrar as tranções desse usuario!");
    return;
  }

  console.log(`Usuario Encontrado: ${user.nome} Adicionando Transações`);

  user.transacoes.push({
    tipo: tipo,
    valor: infos.valor,
    data: infos.data,
    horario: infos.horario,
  });

  console.log(user.transacoes);
};


const depositar = (usuario, valor) => {
  const user = contas.find((u) => u.nome === usuario);

  if (!user) {
    console.log(`Usuario: ${usuario} Não encontrado!`);
    return;
  }

  console.log(
    `Usuario encontrado, Depositando...:  ${JSON.stringify(user.nome)}`,
  );

  if (valor <= 0) {
    console.log("Valor Invalido!");
    return;
  }

  user.saldo += valor;

  /* 
  função de cada parametro enviado na função "addTransacao"
  1- user.nome | Se refere ao nome do usuario que eu quero acessar a "conta" bancaria
  2- 'Deposito' | Se refere ao tipo de transação que eu quero fazer, como supor 'Sacar', 'Depositar' e etc
  3- O Terceiro parametro são as informações que quero adicionar nas transações do usuario, tipo um logs de tudo que foi feito */

  addTransacao(user.nome, "Depositar", {
    valor: valor,
    data: new Date().toDateString("pt-BR"),
    horario: `${new Date().getHours()}:${new Date().getMinutes()}`,
  });
};

/* Para consultar um dado de um usuario, tem que por o tipo  de dados, que se trata de:
1- saldo 
2- transacoes
um desses dois tipos que devem ser utilizados*/

const consultarDadosUsuario = (usuario, tipo) => {
  const user = contas.find((u) => u.nome === usuario);

  if (!user) {
    console.log(
      `Usuario não encontrado, portanto não foi possivel realizar a busca dos dados!`,
    );
    return;
  }

  if (tipo === "saldo") {
    console.log(`Usuario: ${usuario} Saldo Atual: ${user.saldo}`);

  } else if (tipo === "transacoes") {
    console.log(
      `Usuario ${usuario} | Transações: ${JSON.stringify(user.transacoes)}`,
    );
  }
};

//depositar('Pedro', 15)
//consultarDadosUsuario("Pedro", "transacoes");
 
