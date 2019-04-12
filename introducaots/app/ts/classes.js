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
var Alo = /** @class */ (function () {
    //nome: string;
    function Alo(nome) {
        this.nome = nome;
    }
    Alo.prototype.dizerAlo = function () {
        console.log("Ol\u00E1, " + this.nome);
    };
    return Alo;
}());
var alo = new Alo('Filipe');
alo.dizerAlo();
var Post = /** @class */ (function () {
    function Post(_teste) {
        this._teste = _teste;
    }
    Object.defineProperty(Post.prototype, "text", {
        get: function () {
            return this._teste;
        },
        set: function (text) {
            this._teste = text;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
var AdvancedPost = /** @class */ (function (_super) {
    __extends(AdvancedPost, _super);
    //private _likes : number = 0;
    function AdvancedPost(_likes) {
        var _this = _super.call(this, 'testo') || this;
        _this._likes = _likes;
        return _this;
    }
    AdvancedPost.prototype.addHashtag = function (hashtag) {
    };
    AdvancedPost.prototype.like = function () { this._likes++; };
    Object.defineProperty(AdvancedPost.prototype, "likes", {
        get: function () { return this._likes; },
        enumerable: true,
        configurable: true
    });
    return AdvancedPost;
}(Post));
var p = new Post('scibs');
console.log(p.text);
p.text = 'novo scribs';
console.log(p.text);
var ap = new AdvancedPost('meu post');
ap.like();
ap.like();
console.log(ap.likes);
//# sourceMappingURL=classes.js.map