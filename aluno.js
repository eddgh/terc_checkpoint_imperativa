//ex1.js
const Aluno = {
    listaEstudantes: [],
    nome: null,
    faltas: null,
    notas: [],

    adicionarAluno: function (nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;

        const estudante = {
            nome: this.nome,
            faltas: this.faltas,
            notas: this.notas,
        }
        this.listaEstudantes.push(estudante);
    },

    adicionarFaltas: function (indiceEstudante) {
        this.listaEstudantes[indiceEstudante].faltas++;
    },

    calcularMedia: function (indiceEstudante) {
        let total = 0;
        let media = 0;
        this.listaEstudantes[indiceEstudante].notas.forEach(nota => {
                total += nota;
            });
            media = total / this.listaEstudantes[indiceEstudante].notas.length;
            return(media.toFixed(2));
        }
    
}

module.exports = Aluno;






