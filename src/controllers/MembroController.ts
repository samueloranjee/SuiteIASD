export class MembroController {

    _nome: string;
    resultado: string;

    constructor(){}

    get nome(): string {
        return this._nome; 
    }

    set nome(newNome: string) {
        this._nome = newNome;
    }

    enviar(): void {
        this.resultado = this.nome;
    }

    mostrar(): string{
       return this.resultado;
    };

    limpar(): void {
        this.nome = "";
        this.resultado = "";
    }
    
}