const lista = [{id: 0, nome: "Lana Rhoades", eta: 24, nascita: "Chicago", img: "https://i.imgur.com/NqASS5Y.png"},
               {id: 1, nome: "Nicole Aniston", eta: 33, nascita: "San Diego", img: "https://i.imgur.com/QhVWW9s.jpg"},
               {id: 2, nome: "Adriana Chechik", eta: 29, nascita: "Downingtown", img: "https://i.imgur.com/Jo51zhb.png"},
               {id: 3, nome: "Jessa Rhodes", eta: 27, nascita: "Portland", img: "https://i.imgur.com/WOzym8y.jpg"},
               {id: 4, nome: "Peta Jensen", eta: 29, nascita: "Zephyrhills", img: "https://i.imgur.com/02IGBOS.jpg"},
               {id: 5, nome: "Megan Rain", eta: 24, nascita: "Palm Springs", img: "https://i.imgur.com/QnyJeTx.jpg"},
               {id: 6, nome: "Remy Lacroix", eta: 32, nascita: "San Francisco", img: "https://i.imgur.com/PgaHRub.jpg"}]
module.exports = class Ragazza {

  constructor(ragazza) { this.ragazza=ragazza }

  insert() {
    let nuovoid =lista.length
    this.ragazza.id=nuovoid
    lista[nuovoid]=this.ragazza
    return nuovoid;
  }

  static fetchAll() {
    return lista;
  }

  static fetchById(indice) {
    if (lista[indice]) {
      return lista[indice];
    }else{
      return undefined;
    }
  }
  static deleteByID(indice) {
    if (lista[indice] == undefined || lista[indice] == null){
      return 1; // 0 KO
    }else{
      lista[indice]=null;
      return 0; // OK
    }

  }

  static updateByID(indice,ragazza) {
    if (lista[indice] != undefined && lista[indice]!=null){
      lista[indice]=ragazza;
      console.log(lista[indice]);
      return 0; // 0 OK, 1 KO
    }else{
      return 1; // KO
    }
  }

}
