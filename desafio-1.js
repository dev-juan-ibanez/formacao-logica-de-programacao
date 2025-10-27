// === VARIÁVEIS ===
let nomeHeroi = 'Juan Ibanez';
let xpHeroi = 0;
let gold = 300;
let nivelAtual = 'Ferro';
let batalhas = 0;
let fugas = 0;
let armaEquipada = null;
let armaduraEquipada = null;
let ataqueBonus = 0;
let defesaBonus = 0;
let bossesDerrotados = [];

// Sistema de monstros - VALORES BALANCEADOS
let monstros = [
    { nome: 'Slime', xp: 400, gold: 300, forca: 1 },
    { nome: 'Rato Gigante', xp: 450, gold: 350, forca: 1 },
    { nome: 'Goblin Fraco', xp: 500, gold: 400, forca: 2 },
    { nome: 'Aranha Pequena', xp: 480, gold: 380, forca: 1 },
    { nome: 'Goblin', xp: 800, gold: 600, forca: 3 },
    { nome: 'Orc', xp: 900, gold: 700, forca: 4 },
    { nome: 'Esqueleto', xp: 850, gold: 650, forca: 3 },
    { nome: 'Troll', xp: 1200, gold: 900, forca: 6 },
    { nome: 'Ogro', xp: 1150, gold: 850, forca: 5 },
    { nome: 'Lobisomem', xp: 1300, gold: 1000, forca: 6 }
];

// BOSSES
let bosses = {
    'Bronze': { nome: 'Chefe Goblin', xp: 2000, gold: 1500, forca: 8 },
    'Prata': { nome: 'Orc Guerreiro', xp: 3000, gold: 2000, forca: 12 },
    'Ouro': { nome: 'Troll Ancião', xp: 4000, gold: 3000, forca: 16 },
    'Platina': { nome: 'Minotauro', xp: 5000, gold: 4000, forca: 20 },
    'Ascendente': { nome: 'Dragão Jovem', xp: 6000, gold: 5000, forca: 24 },
    'Imortal': { nome: 'Lich Sombrio', xp: 7000, gold: 6000, forca: 28 }
};

let dragaoAnciao = { nome: 'Dragão Ancião', xp: 10000, gold: 10000, forca: 35 };

// Equipamentos básicos
let equipamentosBasicos = [
    { item: 'Espada Enferrujada', tipo: 'arma', ataque: 5, valorVenda: 50 },
    { item: 'Escudo de Madeira', tipo: 'armadura', defesa: 6, valorVenda: 40 }
];

// Lojas - PREÇOS BALANCEADOS
let lojas = {
    'Bronze': [
        { item: 'Espada Curta de Bronze', preco: 400, tipo: 'arma', ataque: 12 },
        { item: 'Armadura de Couro Reforçado', preco: 500, tipo: 'armadura', defesa: 15 }
    ],
    'Prata': [
        { item: 'Adagas de Prata Duplas', preco: 800, tipo: 'arma', ataque: 20 },
        { item: 'Armadura de Escamas de Prata', preco: 1000, tipo: 'armadura', defesa: 25 }
    ],
    'Ouro': [
        { item: 'Arco Dourado do Caçador', preco: 1200, tipo: 'arma', ataque: 30 },
        { item: 'Capa Dourada de Honra', preco: 1000, tipo: 'armadura', defesa: 20 }
    ],
    'Platina': [
        { item: 'Martelo do Trovão', preco: 1600, tipo: 'arma', ataque: 40 },
        { item: 'Armadura de Platina Forjada', preco: 2000, tipo: 'armadura', defesa: 35 }
    ],
    'Ascendente': [
        { item: 'Cajado das Tempestades', preco: 2400, tipo: 'arma', ataque: 55 },
        { item: 'Armadura Estelar', preco: 3000, tipo: 'armadura', defesa: 45 }
    ],
    'Imortal': [
        { item: 'Lâmina Ígnea do Dragão', preco: 4000, tipo: 'arma', ataque: 70 },
        { item: 'Armadura de Ossos de Dragão', preco: 5000, tipo: 'armadura', defesa: 60 }
    ],
    'Radiante': [
        { item: 'Espada Solar', preco: 6000, tipo: 'arma', ataque: 90 },
        { item: 'Armadura Radiante da Luz Eterna', preco: 7000, tipo: 'armadura', defesa: 80 }
    ]
};

console.log('🏰 ' + nomeHeroi + ' se afiliou à guilda como ' + nivelAtual);
console.log('💰 Começa com: ' + gold + ' moedas de ouro');
console.log('🌄 ' + nomeHeroi + ' começou sua jornada épica!\n');

// === JORNADA PRINCIPAL ===
while (nivelAtual !== 'Radiante' && batalhas < 100) {
    batalhas++;
    
    // Calcular força do herói
    let forcaHeroi = 1;
    if (nivelAtual === 'Ferro') forcaHeroi = 2;
    else if (nivelAtual === 'Bronze') forcaHeroi = 5;
    else if (nivelAtual === 'Prata') forcaHeroi = 8;
    else if (nivelAtual === 'Ouro') forcaHeroi = 12;
    else if (nivelAtual === 'Platina') forcaHeroi = 16;
    else if (nivelAtual === 'Ascendente') forcaHeroi = 20;
    else if (nivelAtual === 'Imortal') forcaHeroi = 24;
    
    forcaHeroi += Math.floor(ataqueBonus / 3) + Math.floor(defesaBonus / 3);
    
    // VERIFICAR QUAL BOSS DEVE ENFRENTAR
    let bossRequerido = null;
    if (nivelAtual === 'Bronze' && !bossesDerrotados.includes('Chefe Goblin')) {
        bossRequerido = bosses['Bronze'];
    } else if (nivelAtual === 'Prata' && !bossesDerrotados.includes('Orc Guerreiro')) {
        bossRequerido = bosses['Prata'];
    } else if (nivelAtual === 'Ouro' && !bossesDerrotados.includes('Troll Ancião')) {
        bossRequerido = bosses['Ouro'];
    } else if (nivelAtual === 'Platina' && !bossesDerrotados.includes('Minotauro')) {
        bossRequerido = bosses['Platina'];
    } else if (nivelAtual === 'Ascendente' && !bossesDerrotados.includes('Dragão Jovem')) {
        bossRequerido = bosses['Ascendente'];
    } else if (nivelAtual === 'Imortal' && !bossesDerrotados.includes('Lich Sombrio')) {
        bossRequerido = bosses['Imortal'];
    }
    
    // VERIFICAR SE TEM EQUIPAMENTO DO NÍVEL ATUAL
    let temEquipamentoCorreto = false;
    if (nivelAtual !== 'Ferro') {
        let lojaAtual = lojas[nivelAtual];
        let temArma = false;
        let temArmadura = false;
        
        if (armaEquipada) {
            for (let item of lojaAtual) {
                if (item.tipo === 'arma' && armaEquipada.item === item.item) {
                    temArma = true;
                    break;
                }
            }
        }
        
        if (armaduraEquipada) {
            for (let item of lojaAtual) {
                if (item.tipo === 'armadura' && armaduraEquipada.item === item.item) {
                    temArmadura = true;
                    break;
                }
            }
        }
        
        temEquipamentoCorreto = temArma && temArmadura;
    }
    
    // COMPRAR EQUIPAMENTO SE NÃO TEM E TEM OURO
    if (nivelAtual !== 'Ferro' && bossRequerido && !temEquipamentoCorreto) {
        let lojaAtual = lojas[nivelAtual];
        let custoTotal = 0;
        for (let item of lojaAtual) {
            custoTotal += item.preco;
        }
        
        if (gold >= custoTotal) {
            console.log('💰💡 COMPRANDO EQUIPAMENTO DE ' + nivelAtual + ' PARA ENFRENTAR O BOSS!');
            console.log('🛒 COMPRANDO EQUIPAMENTO...');
            
            for (let item of lojaAtual) {
                if (gold >= item.preco) {
                    gold -= item.preco;
                    
                    if (item.tipo === 'arma') {
                        if (armaEquipada) ataqueBonus -= armaEquipada.ataque;
                        armaEquipada = item;
                        ataqueBonus += item.ataque;
                        console.log('✅ EQUIPADO: ' + item.item + ' (+' + item.ataque + ' ataque)');
                    } else {
                        if (armaduraEquipada) defesaBonus -= armaduraEquipada.defesa;
                        armaduraEquipada = item;
                        defesaBonus += item.defesa;
                        console.log('✅ EQUIPADO: ' + item.item + ' (+' + item.defesa + ' defesa)');
                    }
                    console.log('💸 Gastou: ' + item.preco + ' ouro');
                }
            }
            console.log('💰 Saldo atual: ' + gold + ' ouro');
            console.log('⚔️  Ataque total: ' + ataqueBonus + ' | 🛡️  Defesa total: ' + defesaBonus + '\n');
            temEquipamentoCorreto = true;
        }
    }
    
    // VERIFICAR SE PODE COMPRAR EQUIPAMENTO RADIANTE
    if (nivelAtual === 'Imortal' && bossesDerrotados.includes('Lich Sombrio')) {
        let lojaRadiante = lojas['Radiante'];
        let custoRadiante = 0;
        for (let item of lojaRadiante) {
            custoRadiante += item.preco;
        }
        
        if (gold >= custoRadiante && (!armaEquipada || armaEquipada.item !== 'Espada Solar')) {
            console.log('💰✨ COMPRANDO EQUIPAMENTO RADIANTE PARA O DRAGÃO ANCIÃO!');
            console.log('🛒 COMPRANDO EQUIPAMENTO RADIANTE...');
            
            for (let item of lojaRadiante) {
                if (gold >= item.preco) {
                    gold -= item.preco;
                    
                    if (item.tipo === 'arma') {
                        if (armaEquipada) ataqueBonus -= armaEquipada.ataque;
                        armaEquipada = item;
                        ataqueBonus += item.ataque;
                        console.log('✨✅ EQUIPADO: ' + item.item + ' (+' + item.ataque + ' ataque)');
                    } else {
                        if (armaduraEquipada) defesaBonus -= armaduraEquipada.defesa;
                        armaduraEquipada = item;
                        defesaBonus += item.defesa;
                        console.log('✨✅ EQUIPADO: ' + item.item + ' (+' + item.defesa + ' defesa)');
                    }
                    console.log('💸 Gastou: ' + item.preco + ' ouro');
                }
            }
            console.log('💰 Saldo atual: ' + gold + ' ouro');
            console.log('⚔️  Ataque total: ' + ataqueBonus + ' | 🛡️  Defesa total: ' + defesaBonus + '\n');
        }
    }
    
    // Encontrar monstro
    let monstroEncontrado;
    
    // DRAGÃO ANCIÃO aparece se tiver equipamento Radiante
    if (nivelAtual === 'Imortal' && armaEquipada && armaduraEquipada && 
        armaEquipada.item === 'Espada Solar' && 
        armaduraEquipada.item === 'Armadura Radiante da Luz Eterna') {
        monstroEncontrado = dragaoAnciao;
        console.log('⚡ CHAMADO DO DESTINO: O DRAGÃO ANCIÃO SENTIU SEU PODER!');
    }
    // Boss requerido aparece se tiver equipamento
    else if (bossRequerido && temEquipamentoCorreto) {
        monstroEncontrado = bossRequerido;
        console.log('💀 DESAFIO: ' + monstroEncontrado.nome.toUpperCase() + ' APARECEU!');
    }
    // Monstro normal para farmar ouro
    else {
        monstroEncontrado = monstros[Math.floor(Math.random() * monstros.length)];
        if (bossRequerido && !temEquipamentoCorreto) {
            console.log('💰 PRECISA FARMAR OURO PARA EQUIPAMENTO DE ' + nivelAtual + '!');
        }
    }
    
    console.log('👹 ' + nomeHeroi + ' encontrou um ' + monstroEncontrado.nome + '!');
    console.log('💪 Força do Herói: ' + forcaHeroi + ' | Força do Monstro: ' + monstroEncontrado.forca);
    
    // Decidir se fuge - FUGE SE FOR BOSS SEM EQUIPAMENTO
    let fugiu = false;
    if ((Object.values(bosses).includes(monstroEncontrado) && !temEquipamentoCorreto) ||
        (monstroEncontrado.nome === 'Dragão Ancião' && 
         (!armaEquipada || armaEquipada.item !== 'Espada Solar'))) {
        fugiu = true;
        console.log('💀 FUGA AUTOMÁTICA! Não está preparado para ' + monstroEncontrado.nome + '!');
        console.log('🏃‍♂️  Melhor farmar monstros para comprar equipamento adequado!');
    }
    
    if (fugiu) {
        fugas++;
        console.log('🏃‍♂️ 💨 ' + nomeHeroi + ' FUGIU!\n');
        continue;
    }
    
    // Batalha
    console.log('⚔️  BATALHA ' + batalhas + ': ' + nomeHeroi + ' vs ' + monstroEncontrado.nome);
    console.log('🎯 Ataque: ' + ataqueBonus + ' | 🛡️  Defesa: ' + defesaBonus);
    
    if (monstroEncontrado === dragaoAnciao) {
        console.log('🔥 🐉 LUTA ÉPICA CONTRA O DRAGÃO ANCIÃO!');
        console.log('✨ EQUIPAMENTO RADIANTE BRILHA COM PODER DIVINO!');
    } else if (Object.values(bosses).includes(monstroEncontrado)) {
        console.log('💀 ENFRENTANDO ' + monstroEncontrado.nome.toUpperCase() + '!');
    }
    
    // Ganhos de batalha
    xpHeroi += monstroEncontrado.xp;
    gold += monstroEncontrado.gold;
    
    console.log('💥 Derrotou o ' + monstroEncontrado.nome + '!');
    console.log('📈 +' + monstroEncontrado.xp + ' XP | 💰 +' + monstroEncontrado.gold + ' ouro');
    
    // Adicionar boss à lista de derrotados
    if (Object.values(bosses).includes(monstroEncontrado) && !bossesDerrotados.includes(monstroEncontrado.nome)) {
        bossesDerrotados.push(monstroEncontrado.nome);
        console.log('🏆 BOSS DERROTADO: ' + monstroEncontrado.nome + '!');
    }
    
    // Evento baú (30% chance)
    if (Math.random() < 0.3) {
        console.log('🗝️  ENCONTROU UM BAÚ ESCONDIDO!');
        if (Math.random() < 0.5) {
            let equipamento = equipamentosBasicos[Math.floor(Math.random() * equipamentosBasicos.length)];
            console.log('🎁 ENCONTROU: ' + equipamento.item + '!');
            gold += equipamento.valorVenda;
            console.log('💰 VENDEU: +' + equipamento.valorVenda + ' ouro');
        } else {
            let ouroExtra = Math.floor(Math.random() * 200) + 100;
            gold += ouroExtra;
            console.log('💰 Achou ' + ouroExtra + ' moedas de ouro!');
        }
    }
    
    console.log('📊 Total: ' + xpHeroi + ' XP | ' + gold + ' ouro\n');
    
    // Atualizar nível por XP - SÓ SOBE SE DERROTOU O BOSS DO NÍVEL
    let nivelAnterior = nivelAtual;
    
    // Verificar se derrotou o boss do nível atual para poder subir
    let podeSubirNivel = false;
    if (nivelAtual === 'Ferro' && xpHeroi >= 1000) podeSubirNivel = true;
    else if (nivelAtual === 'Bronze' && xpHeroi >= 2500 && bossesDerrotados.includes('Chefe Goblin')) podeSubirNivel = true;
    else if (nivelAtual === 'Prata' && xpHeroi >= 5000 && bossesDerrotados.includes('Orc Guerreiro')) podeSubirNivel = true;
    else if (nivelAtual === 'Ouro' && xpHeroi >= 8000 && bossesDerrotados.includes('Troll Ancião')) podeSubirNivel = true;
    else if (nivelAtual === 'Platina' && xpHeroi >= 12000 && bossesDerrotados.includes('Minotauro')) podeSubirNivel = true;
    else if (nivelAtual === 'Ascendente' && xpHeroi >= 18000 && bossesDerrotados.includes('Dragão Jovem')) podeSubirNivel = true;
    else if (nivelAtual === 'Imortal' && xpHeroi >= 25000 && bossesDerrotados.includes('Lich Sombrio')) podeSubirNivel = true;
    
    if (podeSubirNivel) {
        if (xpHeroi < 1000) nivelAtual = 'Ferro';
        else if (xpHeroi < 2500) nivelAtual = 'Bronze';
        else if (xpHeroi < 5000) nivelAtual = 'Prata';
        else if (xpHeroi < 8000) nivelAtual = 'Ouro';
        else if (xpHeroi < 12000) nivelAtual = 'Platina';
        else if (xpHeroi < 18000) nivelAtual = 'Ascendente';
        else if (xpHeroi < 25000) nivelAtual = 'Imortal';
        else if (monstroEncontrado === dragaoAnciao) {
            nivelAtual = 'Radiante';
            console.log('⭐ ' + nomeHeroi + ' SE TORNOU RADIANTE AO DERROTAR O DRAGÃO!');
            break;
        }
    }
    
    // Subida de nível + Bônus
    if (nivelAtual !== nivelAnterior && nivelAtual !== 'Radiante') {
        console.log('🎊 ' + nomeHeroi + ' SUBIU PARA ' + nivelAtual + '!');
        
        let bonusOuro = 0;
        if (nivelAtual === 'Bronze') bonusOuro = 500;
        else if (nivelAtual === 'Prata') bonusOuro = 800;
        else if (nivelAtual === 'Ouro') bonusOuro = 1200;
        else if (nivelAtual === 'Platina') bonusOuro = 2000;
        else if (nivelAtual === 'Ascendente') bonusOuro = 3000;
        else if (nivelAtual === 'Imortal') bonusOuro = 5000;
        
        gold += bonusOuro;
        console.log('💰 Bônus de nível: +' + bonusOuro + ' ouro!');
        console.log('💰 Saldo total: ' + gold + ' ouro\n');
    }
    
    // Parar se derrotou o Dragão Ancião
    if (monstroEncontrado === dragaoAnciao) {
        break;
    }
}

// === FINAL ===
console.log('\n🎊 JORNADA CONCLUÍDA!');
console.log('=================================');
console.log('👤 Herói: ' + nomeHeroi);
console.log('⭐ Nível Final: ' + nivelAtual);
console.log('⚔️  Batalhas: ' + batalhas);
console.log('🏃‍♂️ Fugas: ' + fugas);
console.log('📈 XP: ' + xpHeroi);
console.log('💰 Ouro: ' + gold);
console.log('🎯 Ataque: ' + ataqueBonus);
console.log('🛡️  Defesa: ' + defesaBonus);
console.log('=================================');
console.log('🎒 EQUIPAMENTOS:');
console.log('⚔️  ' + (armaEquipada ? armaEquipada.item + ' (+' + armaEquipada.ataque + ' ataque)' : 'Nenhuma'));
console.log('🛡️  ' + (armaduraEquipada ? armaduraEquipada.item + ' (+' + armaduraEquipada.defesa + ' defesa)' : 'Nenhuma'));
console.log('=================================');
console.log('🏆 BOSSES DERROTADOS: ' + bossesDerrotados.join(', '));

if (nivelAtual === 'Radiante') {
    console.log('💫 HERÓI RADIANTE! Dragão Ancião derrotado!');
} else if (nivelAtual === 'Imortal' && bossesDerrotados.includes('Lich Sombrio')) {
    let custoRadiante = 13000;
    console.log('💡 Precisa farmar mais ' + Math.max(0, custoRadiante - gold) + ' de ouro para equipamento RADIANTE!');
} else if (bossesDerrotados.length < 6) {
    let bossFaltante = '';
    if (!bossesDerrotados.includes('Chefe Goblin')) bossFaltante = 'Chefe Goblin';
    else if (!bossesDerrotados.includes('Orc Guerreiro')) bossFaltante = 'Orc Guerreiro';
    else if (!bossesDerrotados.includes('Troll Ancião')) bossFaltante = 'Troll Ancião';
    else if (!bossesDerrotados.includes('Minotauro')) bossFaltante = 'Minotauro';
    else if (!bossesDerrotados.includes('Dragão Jovem')) bossFaltante = 'Dragão Jovem';
    else if (!bossesDerrotados.includes('Lich Sombrio')) bossFaltante = 'Lich Sombrio';
    
    console.log('💡 Precisa derrotar: ' + bossFaltante + '!');
}

console.log("O Herói " + nomeHeroi + " está no nível " + nivelAtual);