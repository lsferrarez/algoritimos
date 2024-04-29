// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".
//   }

// Criando um array com 5 nomes
const nomes = ["Alice", "Bob", "Carlos", "Diana", "Eva"];
nomes.reverse()

// Usando um loop for para percorrer a lista de nomes
for (let i = 0; i < nomes.length; i++) {
    console.table(nomes)
  console.table(`Nome ${i + 1}: ${nomes[i]}`);
}
