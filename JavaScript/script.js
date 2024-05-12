const alunos = [
  {
    nome: "Rafael",
    nota1: 7,
    nota2: 8
  },
  {
    nome: "Pietro",
    nota1: 9,
    nota2: 10
  },
  {
    nome: "Alana",
    nota1: 5,
    nota2: 6
  },
]

function media(nota1, nota2) {
  return ((nota1 + nota2) / 2).toFixed(2)
}

for (let aluno of alunos) {
  let mediaNotas = media(aluno.nota1, aluno.nota2)
  alert(`Aluno ${aluno.nome} obteve média ${mediaNotas}`)
}
