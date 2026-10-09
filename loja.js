// ===== 1. DADOS =====
// nomeLoja e o array produtos (Tarefa 1)

const nomeLoja = "Vendinha do Matheus";
const produtos = [
    { nome: "Placa de vídeo", categoria: "Hardware", preco: 3000, quantidade: 4, vendidos: 21 },
    { nome: "Mouse Gamer", categoria: "Hardware", preco: 130, quantidade: 8, vendidos: 12 },
    { nome: "Teclado Gamer", categoria: "Hardware", preco: 200, quantidade: 2, vendidos: 3 },
    { nome: "Chave Red Dead Redemption 2", categoria: "Software", preco: 80, quantidade: 5, vendidos: 5 },
    { nome: "Chave Resident Evil 4 Remake", categoria: "Software", preco: 100, quantidade: 1, vendidos: 2 },
    { nome: "Monitor", categoria: "Hardware", preco: 490, quantidade: 10, vendidos: 5 }
];

// ===== 2. FUNÇÕES =====
// Tarefa 2

let i = 0
function listarProdutos(produtos){
    produtos.forEach(produto => {
        i++
        console.log(`${i}. ${produto.nome} | ${produto.categoria} | R$ ${produto.preco} | ${produto.quantidade} un. | ${produto.vendidos} vendidos`);
    });
}

// Tarefa 3
function cadastrarProduto(produtos, nome, categoria, preco, quantidade){
    produtos.push({ nome: formatarNome(nome), categoria: categoria, preco: preco, quantidade: quantidade, vendidos: 0});
    return produtos.length;
}

// Tarefa 4
function calcularValorEstoque(produtos){
  return produtos.reduce((total, produto) => {
  return total + (produto.preco * produto.quantidade)
  }, 0);
}

// Tarefa 5
function buscarProduto(lista, termo){
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        if (produto.nome.toLowerCase().includes(termo.toLowerCase())) {
            return produto;
        }
    }
    return null;
}

// Tarefa 6
function produtosEmFalta(lista, minimo){
    const emFalta = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            emFalta.push(lista[i]);
        }
    }
    return emFalta;
}

// Tarefa 7
function aplicarDesconto(lista, categoria, percentual){
    let alterados = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
            alterados++;
        }
    }
    return alterados;
}

// Tarefa 8
function registrarVenda(lista, nome, quantidade){
    const produto = buscarProduto(lista, nome);
    if (produto === null || produto.quantidade < quantidade) {
        return false;
    }
    produto.quantidade = produto.quantidade - quantidade;
    produto.vendidos = produto.vendidos + quantidade;
    return true;
}

// Tarefa 9
function formatarNome(texto){
    const limpo = texto.trim();
    return limpo.slice(0, 1).toUpperCase() + limpo.slice(1).toLowerCase();
}

// Tarefa 10
function converterParaJSON(lista){
    return JSON.stringify(lista);
}

function lerJSON(texto){
    return JSON.parse(texto);
}

// Tarefa 11
function gerarRelatorio(nome, lista){
    const emFalta = produtosEmFalta(lista, 5);
    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${calcularValorEstoque(lista)}`);
    console.log(`Produtos com estoque baixo: ${emFalta.length}`);
    for (let i = 0; i < emFalta.length; i++) {
        console.log(`- ${emFalta[i].nome} (${emFalta[i].quantidade} un.)`);
    }
}

// ===== 3. PROGRAMA PRINCIPAL =====

console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);

console.log("--- Tarefa 3: cadastrar ---");
const totalProdutos = cadastrarProduto(produtos, "  Headset Gamer ", "Hardware", 250, 6);
console.log(`Produto cadastrado! Agora a loja tem ${totalProdutos} produtos.`);

console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: R$ ${calcularValorEstoque(produtos)}`);

console.log("--- Tarefa 5: buscar ---");
const encontrado = buscarProduto(produtos, "PLACA");
if (encontrado !== null) {
    console.log(`Encontrado: ${encontrado.nome} - R$ ${encontrado.preco}`);
}
const naoEncontrado = buscarProduto(produtos, "notebook");
if (naoEncontrado === null) {
    console.log("Produto não encontrado.");
}

console.log("--- Tarefa 6: em falta ---");
const emFalta = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${emFalta.length}`);

console.log("--- Tarefa 7: desconto ---");
const alterados = aplicarDesconto(produtos, "Software", 10);
console.log(`${alterados} produtos receberam desconto.`);
const jogo = buscarProduto(produtos, "red dead");
console.log(`Novo preço do Read Dead Redemption 2: R$ ${jogo.preco}`);

console.log("--- Tarefa 8: registrar venda ---");
if (registrarVenda(produtos, "mouse gamer", 3)) {
    const mouse = buscarProduto(produtos, "mouse gamer");
    console.log(`Venda realizada! ${mouse.nome}: ${mouse.quantidade} un. em estoque, ${mouse.vendidos} vendidos.`);
}
if (registrarVenda(produtos, "mouse gamer", 100) === false) {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome("   plaCA dE VÍDeo  "));

console.log("--- Tarefa 10: JSON ---");
const textoJSON = converterParaJSON(produtos);
console.log(typeof textoJSON);
const recuperados = lerJSON(textoJSON);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);