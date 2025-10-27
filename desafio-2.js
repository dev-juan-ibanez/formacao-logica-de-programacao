// Função para calcular o nível com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão usando switch com intervalos
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "Indefinido";
    }

    // Retorna a mensagem no formato exato solicitado
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Função para testar a calculadora com um loop
function executarTestes() {
    // Array com casos de teste
    const casosTeste = [
        { vitorias: 8, derrotas: 5 },
        { vitorias: 15, derrotas: 3 },
        { vitorias: 40, derrotas: 10 },
        { vitorias: 70, derrotas: 15 },
        { vitorias: 85, derrotas: 20 },
        { vitorias: 95, derrotas: 10 },
        { vitorias: 110, derrotas: 25 }
    ];

    // Laço para exibir resultados
    for (let i = 0; i < casosTeste.length; i++) {
        console.log(calcularNivel(casosTeste[i].vitorias, casosTeste[i].derrotas));
    }
}

// Executa os testes
executarTestes();