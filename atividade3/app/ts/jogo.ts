import {Personagem, Soldado, Cavaleiro} from "./personagens";

class Jogo{
    private _jogadores: Array<Personagem>;

    incluir(novoJogador: Personagem){
        for(let jogador of this._jogadores){
            if(novoJogador.id == jogador.id){
                console.error("jogador ja existente");
                break;
            }else this._jogadores.push(jogador);
        }
    }

    consultar(id: number): Personagem{
        for(let jogador of this._jogadores){
            if(jogador.id == id) return jogador;
        }
        return null;
    }

    atacar(atacante: number, defensor: number){
        
    }
}
