let usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
let frutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja'];

usuarios.sort();
frutas.sort((a, b) => b.localeCompare(a));

let ordenacao = [];

for (let i = 0; i < usuarios.length; i++) {
  ordenacao.push([usuarios[i], frutas[i]]);
}

console.log(ordenacao);