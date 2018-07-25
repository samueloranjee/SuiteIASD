export class Ministerio{

    _nome: string;
    _descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }

    set nome(nome: string){
        this._nome = nome;
    }
    get nome(): string{
        return this._nome;
    }

    set descricao(descricao: string){
        this._descricao = descricao;
    }
    get descricao(): string{
        return this._descricao;
    }

}