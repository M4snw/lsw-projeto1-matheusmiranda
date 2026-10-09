# Minha Loja - Vendinha do Matheus

Aluno(a): Matheus Miranda de Melo - 202612010011

Como executar: node loja.js

# Funcionalidades: 

- listarProdutos(produtos): exibe cada produto numerado, com categoria, preço, estoque e vendidos.

- cadastrarProduto(produtos, nome, categoria, preco, quantidade): adiciona um novo produto ao final do array (com vendidos igual a 0, e o nome já formatado) e retorna a nova quantidade de produtos.

- calcularValorEstoque(produtos): retorna o valor total do estoque (preço x quantidade de todos os produtos).

- buscarProduto(lista, termo): retorna o primeiro produto cujo nome contém o termo, sem diferenciar maiúsculas de minúsculas, ou null se não encontrar.

- produtosEmFalta(lista, minimo): retorna um novo array com os produtos cuja quantidade é menor que o mínimo.

- aplicarDesconto(lista, categoria, percentual): aplica o desconto no preço dos produtos da categoria e retorna quantos foram alterados.

- registrarVenda(lista, nome, quantidade): registra a venda se o produto existir e houver estoque suficiente, diminuindo o estoque e aumentando os vendidos. Retorna true ou false.

- formatarNome(texto): retorna o texto sem espaços nas pontas, com a primeira letra maiúscula e o resto em minúsculas.

- converterParaJSON(lista): retorna o array convertido em texto JSON.

- lerJSON(texto): retorna o array a partir do texto JSON.

- gerarRelatorio(nome, lista): exibe o relatório da loja com nome em maiúsculas, quantidade de produtos, valor do estoque e produtos com estoque baixo.
