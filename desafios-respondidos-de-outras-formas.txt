// === VARIÁVEIS ===
let nomeHeroi = 'Juan Ibanez';
let xpHeroi = 0;
let gold = 100; // Ouro inicial equilibrado
let nivelAtual = 'Ferro';
let batalhas = 0;
let fugas = 0;
let armaEquipada = null;
let armaduraEquipada = null;
let ataqueBonus = 0;
let defesaBonus = 0;
let bossesDerrotados = [];
let monstrosNormaisEnfrentados = 0; // Contador para monstros normais por nível

// Sistema de monstros por nível
let monstrosPorNivel = {
    'Ferro': [
        { nome: 'Slime', xp: 300, gold: 500, forca: 1 },
        { nome: 'Rato Gigante', xp: 350, gold: 600, forca: 1 },
        { nome: 'Aranha Pequena', xp: 380, gold: 650, forca: 1 },
        { nome: 'Goblin Fraco', xp: 400, gold: 700, forca: 2 }
    ],
    'Bronze': [
        { nome: 'Goblin', xp: 600, gold: 900, forca: 3 },
        { nome: 'Esqueleto', xp: 650, gold: 1000, forca: 3 }
    ],
    'Prata': [
        { nome: 'Orc', xp: 700, gold: 1100, forca: 4 }
    ],
    'Ouro': [
        { nome: 'Ogro', xp: 850, gold: 1300, forca: 5 }
    ],
    'Platina': [
        { nome: 'Troll', xp: 900, gold: 1400, forca: 6 }
    ],
    'Ascendente': [
        { nome: 'Lobisomem', xp: 1000, gold: 1600, forca: 6 }
    ],
    'Imortal': [
        { nome: 'Lobisomem', xp: 1000, gold: 1600, forca: 6 }
    ]
};

// Todos os monstros (para encontros raros)
let todosMonstros = [
    { nome: 'Slime', xp: 300, gold: 500, forca: 1, nivel: 'Ferro' },
    { nome: 'Rato Gigante', xp: 350, gold: 600, forca: 1, nivel: 'Ferro' },
    { nome: 'Aranha Pequena', xp: 380, gold: 650, forca: 1, nivel: 'Ferro' },
    { nome: 'Goblin Fraco', xp: 400, gold: 700, forca: 2, nivel: 'Ferro' },
    { nome: 'Goblin', xp: 600, gold: 900, forca: 3, nivel: 'Bronze' },
    { nome: 'Esqueleto', xp: 650, gold: 1000, forca: 3, nivel: 'Bronze' },
    { nome: 'Orc', xp: 700, gold: 1100, forca: 4, nivel: 'Prata' },
    { nome: 'Ogro', xp: 850, gold: 1300, forca: 5, nivel: 'Ouro' },
    { nome: 'Troll', xp: 900, gold: 1400, forca: 6, nivel: 'Platina' },
    { nome: 'Lobisomem', xp: 1000, gold: 1600, forca: 6, nivel: 'Ascendente' }
];

// BOSSES
let bosses = {
    'Ferro': { nome: 'Chefe Goblin', xp: 1500, gold: 3000, forca: 8 },
    'Bronze': { nome: 'Orc Guerreiro', xp: 2000, gold: 4000, forca: 12 },
    'Prata': { nome: 'Troll Ancião', xp: 3000, gold: 6000, forca: 16 },
    'Ouro': { nome: 'Minotauro', xp: 4000, gold: 8000, forca: 20 },
    'Platina': { nome: 'Dragão Jovem', xp: 5000, gold: 10000, forca: 24 },
    'Ascendente': { nome: 'Lich Sombrio', xp: 6000, gold: 12000, forca: 28 },
    'Imortal': { nome: 'Deus da Guerra', xp: 7000, gold: 23900, forca: 32 }
};

let dragaoAnciao = { nome: 'Dragão Ancião', xp: 10000, gold: 20000, forca: 35 };

// Equipamentos básicos
let equipamentosBasicos = [
    { item: 'Espada Enferrujada', tipo: 'arma', ataque: 5, valorVenda: 50 },
    { item: 'Escudo de Madeira', tipo: 'armadura', defesa: 6, valorVenda: 40 }
];

// Lojas
let lojas = {
    'Bronze': [
        { item: 'Espada Curta de Bronze', preco: 600, tipo: 'arma', ataque: 12 },
        { item: 'Armadura de Couro Reforçado', preco: 500, tipo: 'armadura', defesa: 15 }
    ],
    'Prata': [
        { item: 'Adagas de Prata Duplas', preco: 800, tipo: 'arma', ataque: 20 },
        { item: 'Armadura de Escamas de Prata', preco: 700, tipo: 'armadura', defesa: 25 }
    ],
    'Ouro': [
        { item: 'Arco Dourado do Caçador', preco: 1000, tipo: 'arma', ataque: 30 },
        { item: 'Capa Dourada de Honra', preco: 900, tipo: 'armadura', defesa: 20 }
    ],
    'Platina': [
        { item: 'Martelo do Trovão', preco: 1200, tipo: 'arma', ataque: 40 },
        { item: 'Armadura de Platina Forjada', preco: 1100, tipo: 'armadura', defesa: 35 }
    ],
    'Ascendente': [
        { item: 'Cajado das Tempestades', preco: 1400, tipo: 'arma', ataque: 55 },
        { item: 'Armadura Estelar', preco: 1300, tipo: 'armadura', defesa: 45 }
    ],
    'Imortal': [
        { item: 'Lâmina Ígnea do Dragão', preco: 1600, tipo: 'arma', ataque: 70 },
        { item: 'Armadura de Ossos de Dragão', preco: 1500, tipo: 'armadura', defesa: 60 }
    ],
    'Radiante': [
        { item: 'Espada Solar', preco: 2000, tipo: 'arma', ataque: 90 },
        { item: 'Armadura Radiante da Luz Eterna', preco: 1900, tipo: 'armadura', defesa: 80 }
    ]
};

console.log('🏰 ' + nomeHeroi + ' se afiliou à guilda como ' + nivelAtual);
console.log('💰 Começa com: ' + gold + ' moedas de ouro');
console.log('🌄 ' + nomeHeroi + ' começou sua jornada épica!\n');

// === JORNADA PRINCIPAL ===
while (nivelAtual !== 'Radiante' && batalhas < 250) {
    batalhas++;
    
    // Calcular força do herói baseada no nível
    let forcaHeroi = 1;
    if (nivelAtual === 'Ferro') forcaHeroi = 2;
    else if (nivelAtual === 'Bronze') forcaHeroi = 5;
    else if (nivelAtual === 'Prata') forcaHeroi = 8;
    else if (nivelAtual === 'Ouro') forcaHeroi = 12;
    else if (nivelAtual === 'Platina') forcaHeroi = 16;
    else if (nivelAtual === 'Ascendente') forcaHeroi = 20;
    else if (nivelAtual === 'Imortal') forcaHeroi = 24;
    else if (nivelAtual === 'Radiante') forcaHeroi = 30;
    
    forcaHeroi += Math.floor(ataqueBonus / 3) + Math.floor(defesaBonus / 3);
    
    // ATUALIZAR NÍVEL BASEADO APENAS NO XP (antes de verificar bosses)
    let nivelAnterior = nivelAtual;
    if (xpHeroi < 1000) {
        nivelAtual = 'Ferro';
    } else if (xpHeroi < 3000) {
        nivelAtual = 'Bronze';
    } else if (xpHeroi < 6000) {
        nivelAtual = 'Prata';
    } else if (xpHeroi < 10000) {
        nivelAtual = 'Ouro';
    } else if (xpHeroi < 15000) {
        nivelAtual = 'Platina';
    } else if (xpHeroi < 21000) {
        nivelAtual = 'Ascendente';
    } else {
        nivelAtual = 'Imortal';
    }
    
    // Subida de nível + Bônus
    if (nivelAtual !== nivelAnterior && nivelAtual !== 'Radiante') {
        console.log('🎊 ' + nomeHeroi + ' SUBIU PARA ' + nivelAtual + '!');
        monstrosNormaisEnfrentados = 0; // Reseta contador ao subir de nível
        
        let bonusOuro = 0;
        if (nivelAtual === 'Bronze') bonusOuro = 1000;
        else if (nivelAtual === 'Prata') bonusOuro = 1500;
        else if (nivelAtual === 'Ouro') bonusOuro = 2000;
        else if (nivelAtual === 'Platina') bonusOuro = 3000;
        else if (nivelAtual === 'Ascendente') bonusOuro = 4000;
        else if (nivelAtual === 'Imortal') bonusOuro = 5000;
        
        gold += bonusOuro;
        console.log('💰 Bônus de nível: +' + bonusOuro + ' ouro!');
        console.log('💰 Saldo total: ' + gold + ' ouro\n');
    }
    
    // VERIFICAR QUAL BOSS DEVE ENFRENTAR
    let bossRequerido = null;
    let nivelEquipamento = null;
    if (!bossesDerrotados.includes('Chefe Goblin')) {
        bossRequerido = bosses['Ferro'];
        nivelEquipamento = 'Bronze'; // Equipamento necessário para o próximo nível
    } else if (!bossesDerrotados.includes('Orc Guerreiro')) {
        bossRequerido = bosses['Bronze'];
        nivelEquipamento = 'Prata';
    } else if (!bossesDerrotados.includes('Troll Ancião')) {
        bossRequerido = bosses['Prata'];
        nivelEquipamento = 'Ouro';
    } else if (!bossesDerrotados.includes('Minotauro')) {
        bossRequerido = bosses['Ouro'];
        nivelEquipamento = 'Platina';
    } else if (!bossesDerrotados.includes('Dragão Jovem')) {
        bossRequerido = bosses['Platina'];
        nivelEquipamento = 'Ascendente';
    } else if (!bossesDerrotados.includes('Lich Sombrio')) {
        bossRequerido = bosses['Ascendente'];
        nivelEquipamento = 'Imortal';
    } else if (!bossesDerrotados.includes('Deus da Guerra')) {
        bossRequerido = bosses['Imortal'];
        nivelEquipamento = 'Radiante';
    }
    
    // VERIFICAR SE TEM EQUIPAMENTO DO NÍVEL NECESSÁRIO
    let temEquipamentoCorreto = false;
    if (nivelAtual === 'Ferro') {
        temEquipamentoCorreto = true; // No nível Ferro, pode enfrentar o Chefe Goblin sem equipamentos específicos
    } else if (nivelEquipamento) {
        let lojaAtual = lojas[nivelEquipamento];
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
    
    // COMPRAR EQUIPAMENTO AUTOMATICAMENTE SE TIVER OURO SUFICIENTE
    if (nivelEquipamento && !temEquipamentoCorreto) {
        let lojaAtual = lojas[nivelEquipamento];
        let custoTotal = lojaAtual[0].preco + lojaAtual[1].preco;
        
        if (gold >= custoTotal) {
            console.log('💰💡 COMPRANDO EQUIPAMENTO PARA O NÍVEL ' + nivelEquipamento + '!');
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
    
    // COMPRAR EQUIPAMENTO RADIANTE AUTOMATICAMENTE
    if (bossesDerrotados.length === 7 && nivelAtual === 'Imortal' && 
        (!armaEquipada || armaEquipada.item !== 'Espada Solar' || 
         !armaduraEquipada || armaduraEquipada.item !== 'Armadura Radiante da Luz Eterna')) {
        
        let lojaRadiante = lojas['Radiante'];
        let custoTotal = lojaRadiante[0].preco + lojaRadiante[1].preco;
        
        if (gold >= custoTotal) {
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
    
    // Definir requisitos mínimos de XP e monstros normais por nível
    let xpMinimoPorNivel = {
        'Ferro': 0,
        'Bronze': 1000,
        'Prata': 3000,
        'Ouro': 6000,
        'Platina': 10000,
        'Ascendente': 15000,
        'Imortal': 21000
    };
    let monstrosMinimosPorNivel = 3;

    // DRAGÃO ANCIÃO
    if (bossesDerrotados.length === 7 && nivelAtual === 'Imortal' && 
        armaEquipada && armaduraEquipada && 
        armaEquipada.item === 'Espada Solar' && 
        armaduraEquipada.item === 'Armadura Radiante da Luz Eterna') {
        monstroEncontrado = dragaoAnciao;
        console.log('⚡ CHAMADO DO DESTINO: O DRAGÃO ANCIÃO SENTIU SEU PODER!');
    }
    // Boss requerido
    else if (bossRequerido && temEquipamentoCorreto && 
             xpHeroi >= xpMinimoPorNivel[nivelAtual] && 
             monstrosNormaisEnfrentados >= monstrosMinimosPorNivel) {
        monstroEncontrado = bossRequerido;
        console.log('💀 DESAFIO: ' + monstroEncontrado.nome.toUpperCase() + ' APARECEU!');
        monstrosNormaisEnfrentados = 0;
    }
    // Monstro normal
    else {
        // 10% de chance de encontrar um monstro de nível superior
        let chanceMonstroForte = Math.random();
        if (chanceMonstroForte < 0.1) {
            // Escolher um monstro de nível superior (se disponível)
            let niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal'];
            let indiceNivelAtual = niveis.indexOf(nivelAtual);
            let monstrosDisponiveis = [];
            
            for (let i = indiceNivelAtual + 1; i < niveis.length; i++) {
                if (monstrosPorNivel[niveis[i]]) {
                    monstrosDisponiveis.push(...monstrosPorNivel[niveis[i]]);
                }
            }
            
            if (monstrosDisponiveis.length > 0) {
                monstroEncontrado = monstrosDisponiveis[Math.floor(Math.random() * monstrosDisponiveis.length)];
                console.log('⚠️ PERIGO! Um ' + monstroEncontrado.nome + ' de nível superior apareceu!');
            } else {
                // Se não houver monstros de nível superior, escolher do nível atual
                monstroEncontrado = monstrosPorNivel[nivelAtual][Math.floor(Math.random() * monstrosPorNivel[nivelAtual].length)];
            }
        } else {
            // Escolher monstro do nível atual
            monstroEncontrado = monstrosPorNivel[nivelAtual][Math.floor(Math.random() * monstrosPorNivel[nivelAtual].length)];
        }
        
        if (bossesDerrotados.length === 7 && nivelAtual === 'Imortal') {
            let lojaRadiante = lojas['Radiante'];
            let custoRadiante = (lojaRadiante[0].preco + lojaRadiante[1].preco) - gold;
            if (custoRadiante > 0) {
                console.log('💰 PRECISA FARMAR ' + custoRadiante + ' DE OURO PARA EQUIPAMENTO RADIANTE!');
            } else {
                console.log('✅ TEM OURO SUFICIENTE PARA EQUIPAMENTO RADIANTE!');
            }
        } else if (bossRequerido && !temEquipamentoCorreto) {
            let lojaAtual = lojas[nivelEquipamento];
            let custoFaltante = (lojaAtual[0].preco + lojaAtual[1].preco) - gold;
            if (custoFaltante > 0) {
                console.log('💰 PRECISA FARMAR ' + custoFaltante + ' DE OURO PARA EQUIPAMENTO DE ' + nivelEquipamento + '!');
            } else {
                console.log('✅ TEM OURO SUFICIENTE PARA EQUIPAMENTO DE ' + nivelEquipamento + '!');
            }
        } else if (bossRequerido && xpHeroi < xpMinimoPorNivel[nivelAtual]) {
            console.log('📈 PRECISA DE ' + (xpMinimoPorNivel[nivelAtual] - xpHeroi) + ' XP PARA ENFRENTAR ' + bossRequerido.nome + '!');
        } else if (bossRequerido && monstrosNormaisEnfrentados < monstrosMinimosPorNivel) {
            console.log('👹 PRECISA ENFRENTAR MAIS ' + (monstrosMinimosPorNivel - monstrosNormaisEnfrentados) + ' MONSTROS NORMAIS ANTES DE ' + bossRequerido.nome + '!');
        }
    }
    
    console.log('👹 ' + nomeHeroi + ' encontrou um ' + monstroEncontrado.nome + '!');
    console.log('💪 Força do Herói: ' + forcaHeroi + ' | Força do Monstro: ' + monstroEncontrado.forca);
    
    // Decidir se foge
    let fugiu = false;
    if (Object.values(bosses).includes(monstroEncontrado) && !temEquipamentoCorreto) {
        fugiu = true;
        console.log('💀 FUGA AUTOMÁTICA! Não está preparado para ' + monstroEncontrado.nome + '!');
        console.log('🏃‍♂️  Melhor farmar monstros para comprar equipamento de ' + nivelEquipamento + '!');
    } else if (monstroEncontrado.nome === 'Dragão Ancião' && 
               (!armaEquipada || armaEquipada.item !== 'Espada Solar')) {
        fugiu = true;
        console.log('💀 FUGA AUTOMÁTICA! Não está preparado para o Dragão Ancião!');
        console.log('🏃‍♂️  Precisa do equipamento Radiante!');
    } else if (!Object.values(bosses).includes(monstroEncontrado) && monstroEncontrado.forca > forcaHeroi * 1.5) {
        fugiu = true;
        console.log('⚠️ FUGA AUTOMÁTICA! O ' + monstroEncontrado.nome + ' é forte demais!');
        console.log('🏃‍♂️  Melhor se preparar antes de enfrentar este monstro!');
    }
    
    if (fugiu) {
        fugas++;
        console.log('🏃‍♂️ 💨 ' + nomeHeroi + ' FUGIU!\n');
        continue;
    }
    
    // Incrementar contador de monstros normais apenas se não for boss e não fugiu
    if (!Object.values(bosses).includes(monstroEncontrado) && monstroEncontrado !== dragaoAnciao) {
        monstrosNormaisEnfrentados++;
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
        
        // Bônus extra por derrotar boss
        gold += 1000;
        console.log('💰 Bônus do boss: +1000 ouro!');
    }
    
    // Evento baú (40% chance)
    if (Math.random() < 0.4) {
        console.log('🗝️  ENCONTROU UM BAÚ ESCONDIDO!');
        if (Math.random() < 0.6) {
            let equipamento = equipamentosBasicos[Math.floor(Math.random() * equipamentosBasicos.length)];
            console.log('🎁 ENCONTROU: ' + equipamento.item + '!');
            
            // Trocar equipamento se for melhor
            if (equipamento.tipo === 'arma') {
                if (!armaEquipada || equipamento.ataque > (armaEquipada.ataque || 0)) {
                    if (armaEquipada) ataqueBonus -= armaEquipada.ataque;
                    armaEquipada = equipamento;
                    ataqueBonus += equipamento.ataque;
                    console.log('🔄 TROCOU ARMA: ' + equipamento.item + ' (+' + equipamento.ataque + ' ataque)');
                } else {
                    gold += equipamento.valorVenda;
                    console.log('💰 VENDEU: +' + equipamento.valorVenda + ' ouro');
                }
            } else {
                if (!armaduraEquipada || equipamento.defesa > (armaduraEquipada.defesa || 0)) {
                    if (armaduraEquipada) defesaBonus -= armaduraEquipada.defesa;
                    armaduraEquipada = equipamento;
                    defesaBonus += equipamento.defesa;
                    console.log('🔄 TROCOU ARMADURA: ' + equipamento.item + ' (+' + equipamento.defesa + ' defesa)');
                } else {
                    gold += equipamento.valorVenda;
                    console.log('💰 VENDEU: +' + equipamento.valorVenda + ' ouro');
                }
            }
        } else {
            let ouroExtra = Math.floor(Math.random() * 500) + 300;
            gold += ouroExtra;
            console.log('💰 Achou ' + ouroExtra + ' moedas de ouro!');
        }
    }
    
    console.log('📊 Total: ' + xpHeroi + ' XP | ' + gold + ' ouro\n');
    
    // Parar se derrotou o Dragão Ancião
    if (monstroEncontrado === dragaoAnciao) {
        nivelAtual = 'Radiante';
        console.log('⭐ ' + nomeHeroi + ' SE TORNOU RADIANTE AO DERROTAR O DRAGÃO ANCIÃO!');
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
    console.log('🎯 MISSÃO CUMPRIDA! A paz foi restaurada no reino!');
} else if (bossesDerrotados.length === 7) {
    console.log('💡 Precisa comprar equipamento RADIANTE para enfrentar o Dragão Ancião!');
    console.log('💰 Custo do equipamento Radiante: 3900 ouro');
} else {
    let bossFaltante = '';
    if (!bossesDerrotados.includes('Chefe Goblin')) bossFaltante = 'Chefe Goblin';
    else if (!bossesDerrotados.includes('Orc Guerreiro')) bossFaltante = 'Orc Guerreiro';
    else if (!bossesDerrotados.includes('Troll Ancião')) bossFaltante = 'Troll Ancião';
    else if (!bossesDerrotados.includes('Minotauro')) bossFaltante = 'Minotauro';
    else if (!bossesDerrotados.includes('Dragão Jovem')) bossFaltante = 'Dragão Jovem';
    else if (!bossesDerrotados.includes('Lich Sombrio')) bossFaltante = 'Lich Sombrio';
    else if (!bossesDerrotados.includes('Deus da Guerra')) bossFaltante = 'Deus da Guerra';
    
    if (bossFaltante) {
        console.log('💡 Precisa derrotar: ' + bossFaltante + '!');
    }
}

console.log("O Herói " + nomeHeroi + " está no nível " + nivelAtual);