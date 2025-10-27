// Definição da classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    // Estrutura de decisão para determinar o ataque com base no tipo
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido'; // Caso o tipo não seja reconhecido
    }
    // Exibe a mensagem no formato solicitado
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criação de instâncias para testar a classe
const heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 200, 'mago');
const heroi3 = new Heroi('Shaolin', 28, 'monge');
const heroi4 = new Heroi('Hanzo', 30, 'ninja');

// Testando o método atacar
heroi1.atacar(); // Saída: o guerreiro atacou usando espada
heroi2.atacar(); // Saída: o mago atacou usando magia
heroi3.atacar(); // Saída: o monge atacou usando artes marciais
heroi4.atacar(); // Saída: o ninja atacou usando shuriken