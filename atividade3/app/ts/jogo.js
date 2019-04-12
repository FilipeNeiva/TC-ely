"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jogo = /** @class */ (function () {
    function Jogo() {
    }
    Jogo.prototype.incluir = function (novoJogador) {
        for (var _i = 0, _a = this._jogadores; _i < _a.length; _i++) {
            var jogador = _a[_i];
            if (novoJogador.id == jogador.id) {
                console.error("jogador ja existente");
                break;
            }
            else
                this._jogadores.push(jogador);
        }
    };
    Jogo.prototype.consultar = function (id) {
        for (var _i = 0, _a = this._jogadores; _i < _a.length; _i++) {
            var jogador = _a[_i];
            if (jogador.id == id)
                return jogador;
        }
        return null;
    };
    Jogo.prototype.atacar = function (atacante, defensor) {
    };
    return Jogo;
}());
//# sourceMappingURL=jogo.js.map