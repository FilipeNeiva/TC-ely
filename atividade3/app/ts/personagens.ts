class Personagem {
    protected _id: number;
    protected _nome: string;
    protected _energia: number;
    protected static id: number = 0;

    constructor(nome: string){
        this._energia = 100;
        this._nome = nome;
        this._id = Personagem.id;
        Personagem.id += 1;
    }

    estaVivo(): boolean{
        if(this._energia > 0) return true;
        return false;
    }

    defenderAtaque(valorAtaque: number){
        if(this._energia - valorAtaque < 0) this._energia = 0;
        else this._energia -= valorAtaque;
    }

    get id(): number{
        return this._id;
    }
}

class Soldado extends Personagem{
    protected _forcaAtaque: number;

    constructor(nome: string, forcaAtaque){
        if(forcaAtaque <= 10 && forcaAtaque > 0){
            super(nome);
            this._forcaAtaque = forcaAtaque;
        }else{
            console.error("forca de ataque acima de 10 ou abaixo de 1")
        }
    }

    atacar(oponente: Personagem){
        oponente.defenderAtaque(this._forcaAtaque);
    }

    defenderAtaque(valorAtaque: number){
        if(this._energia - valorAtaque < 0) this._energia = 0;
        else this._energia -= Math.round(valorAtaque/2);
    }
}

class Cavaleiro extends Soldado{
    constructor(nome: string, valorAtaque: number){
        super(nome, valorAtaque);
    }

    atacar(oponente: Personagem){
        oponente.defenderAtaque(this._forcaAtaque * 2);
    }

    defenderAtaque(valorAtaque: number){
        if(this._energia - valorAtaque < 0) this._energia = 0;
        else this._energia -= Math.round(valorAtaque/3);
    }
}

export {Personagem, Soldado, Cavaleiro};