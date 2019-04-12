"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(nome) {
        this._energia = 100;
        this._nome = nome;
        this._id = Personagem.id;
        Personagem.id += 1;
    }
    Personagem.prototype.estaVivo = function () {
        if (this._energia > 0)
            return true;
        return false;
    };
    Personagem.prototype.defenderAtaque = function (valorAtaque) {
        if (this._energia - valorAtaque < 0)
            this._energia = 0;
        else
            this._energia -= valorAtaque;
    };
    Object.defineProperty(Personagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Personagem.id = 0;
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(nome, forcaAtaque) {
        var _this = this;
        if (forcaAtaque <= 10 && forcaAtaque > 0) {
            _this = _super.call(this, nome) || this;
            _this._forcaAtaque = forcaAtaque;
        }
        else {
            console.error("forca de ataque acima de 10 ou abaixo de 1");
        }
        return _this;
    }
    Soldado.prototype.atacar = function (oponente) {
        oponente.defenderAtaque(this._forcaAtaque);
    };
    Soldado.prototype.defenderAtaque = function (valorAtaque) {
        if (this._energia - valorAtaque < 0)
            this._energia = 0;
        else
            this._energia -= Math.round(valorAtaque / 2);
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(nome, valorAtaque) {
        return _super.call(this, nome, valorAtaque) || this;
    }
    Cavaleiro.prototype.atacar = function (oponente) {
        oponente.defenderAtaque(this._forcaAtaque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valorAtaque) {
        if (this._energia - valorAtaque < 0)
            this._energia = 0;
        else
            this._energia -= Math.round(valorAtaque / 3);
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
//# sourceMappingURL=personagens.js.map