let tarefas = [];

const adicionarTarefa = function () {
  let descricao = prompt("Digite uma tarefa:");
  tarefas.push({ descricao: descricao, concluida: false });
  console.log("✅ Tarefa adicionada!");
  listarTarefas();
};

const listarTarefas = () => {
  console.log("📋 Tarefas atuais:");
  tarefas.forEach(function (tarefa, i) {
    let status = tarefa.concluida ? "✔️ Feita" : "❌ Pendente";
    console.log(i + ": " + tarefa.descricao + " - " + status);
  });
};

function gerenciarTarefa(callback) {
  listarTarefas();
  let indice = prompt("Qual o número da tarefa?");
  indice = Number(indice);

  if (indice < 0 || indice >= tarefas.length || isNaN(indice)) {
    console.log("❗ Número inválido.");
    return;
  }

  callback(indice);
}

function excluirTarefa(indice) {
  console.log("🗑️ Excluindo: " + tarefas[indice].descricao);
  tarefas.splice(indice, 1);
  listarTarefas();
}

function concluirTarefa(indice) {
  tarefas[indice].concluida = true;
  console.log("✔️ Concluída!");
  listarTarefas();
}

function atualizarTarefa(indice) {
  let nova = prompt("Nova descrição:");
  tarefas[indice].descricao = nova;
  console.log("🔁 Atualizada!");
  listarTarefas();
}

function menu() {
  let opcao;

  while (opcao != "0") {
    opcao = prompt(
      "Escolha uma opção:\n" +
      "1 - Adicionar\n" +
      "2 - Concluir\n" +
      "3 - Atualizar\n" +
      "4 - Excluir\n" +
      "5 - Ver tarefas\n" +
      "0 - Sair"
    );

    if (opcao == "1") {
      adicionarTarefa();
    } else if (opcao == "2") {
      gerenciarTarefa(concluirTarefa);
    } else if (opcao == "3") {
      gerenciarTarefa(atualizarTarefa);
    } else if (opcao == "4") {
      gerenciarTarefa(excluirTarefa);
    } else if (opcao == "5") {
      listarTarefas();
    } else if (opcao == "0") {
      console.log("👋 Saindo...");
    } else {
      console.log("Opção inválida.");
    }
  }
}

menu();


// function menu() {
//   let opcao;
//   do {
//     opcao = prompt(
//       "O que deseja fazer?\n1 - Adicionar Tarefa\n2 - Concluir Tarefa\n3 - Atualizar Tarefa\n4 - Excluir Tarefa\n5 - Listar Tarefas\n0 - Sair"
//     );

//     switch (opcao) {
//       case "1":
//         adicionarTarefa();
//         break;
//       case "2":
//         gerenciarTarefa(concluirTarefa);
//         break;
//       case "3":
//         gerenciarTarefa(atualizarTarefa);
//         break;
//       case "4":
//         gerenciarTarefa(excluirTarefa);
//         break;
//       case "5":
//         listarTarefas();
//         break;
//       case "0":
//         console.log("Encerrando...");
//         break;
//       default:
//         console.log("Opção inválida.");
//     }
//   } while (opcao !== "0");
// }

// menu();
