class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso (laço de repetição)
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Lee", 40, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
