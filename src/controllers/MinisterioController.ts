export class Ministerio{

    _nome: string;
    _descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }
    get nome(): string{
        return this._nome;
    }

    set descrica(descricao: string){
        this._descricao = descricao;
    }
    get descrica(): string{
        return this._descricao;
    }

}