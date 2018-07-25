export class MembroController {

    _nome: string;

    constructor(newNome: string){
        this.nome = newNome;
    }

    get nome(): string {
        return this._nome; 
    }

    set nome(newNome: string) {
        this._nome = newNome;
    }

}