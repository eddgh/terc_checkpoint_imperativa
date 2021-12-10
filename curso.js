const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    cursoNome: 'JavaScript DH',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes.listaEstudantes,

    adicionarAluno: function (nome, faltas, notas) {
        aluno.adicionarAluno(nome, faltas, notas);
    },

    adicionarFaltas: function (indiceEstudante) {
        aluno.adicionarFaltas(indiceEstudante);
    },

    calcularMedia: function (indiceEstudante) {
        return aluno.calcularMedia(indiceEstudante);
    },

    aprovacao: function (indiceEstudante) {
        const media = this.calcularMedia(indiceEstudante);

        if (
            media >= this.notaAprovacao &&
            this.listaEstudantes[indiceEstudante].faltas < this.faltasMaximas
        ) {
            return `O(a) estudante ${this.listaEstudantes[indiceEstudante].nome}, com média = ${media} e ${this.listaEstudantes[indiceEstudante].faltas} faltas foi aprovado(a)`;
        } else if (
            this.listaEstudantes[indiceEstudante].faltas >= this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O(a) estudante ${this.listaEstudantes[indiceEstudante].nome}, com média = ${media} e ${this.listaEstudantes[indiceEstudante].faltas} faltas  foi aprovado(a) com ressalvas`;
        } else {
            return `O(a) estudante ${this.listaEstudantes[indiceEstudante].nome}, com média = ${media} e ${this.listaEstudantes[indiceEstudante].faltas} faltas  foi reprovado(a)`;
        }
    },

    listaAprovacao: function () {
        this.listaEstudantes.forEach((estudante, index) => {
            console.log(curso.aprovacao(index));
        });
    }

}

curso.listaAprovacao();


