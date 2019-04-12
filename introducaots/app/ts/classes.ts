class Alo {
    //nome: string;

    constructor(public nome:string){}

    dizerAlo(): void {
        console.log(`Olá, ${this.nome}`);
    }
}

let alo = new Alo('Filipe');
alo.dizerAlo();

class Post {
    constructor(private _teste: string) {}

    get text() {
        return this._teste;
    }
    
    set text(text: string) {
        this._teste = text;
    }
}


interface Indexable {
    hashtag : string[];
    addHashtag(hashtag: string);
}


class AdvancedPost extends Post implements Indexable{
    hashtag: string[];
    
    addHashtag(hashtag: string) {
        
    }
    //private _likes : number = 0;

    constructor(private _likes){
        super('testo')
    }

    like() {this._likes++;}

    get likes() {return this._likes;}
}


let p = new Post('scibs');
console.log(p.text);
p.text = 'novo scribs'
console.log(p.text);

let ap = new AdvancedPost('meu post');
ap.like();
ap.like();
console.log(ap.likes);