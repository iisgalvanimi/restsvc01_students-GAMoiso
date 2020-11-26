const Ragazza = require("../model/Ragazza");

exports.getRagazze=(req, res, next) => {
        const lista = Ragazza.fetchAll();
        res.json(lista);
}


exports.getRagazza=(req, res, next) => {
        let jsonr=Ragazza.fetchById(req.params.id);
        if ( typeof jsonr == 'undefined') {
            jsonr = { "msg": `Risorsa id ${req.params.id} non trovata` }
        }
        res.json(jsonr);
}

exports.insertRagazza=(req, res, next) => {
        let jsonr = req.body;
        console.log(jsonr)
        let jsoni={};
        let ragazza = new Ragazza(jsonr)
        let idRagazza=ragazza.insert();
        jsoni.msg = `Json ricevuto dal client correttamente id=${idRagazza}`;
        jsoni.inserted_Obj = { ...jsonr }
        res.json(jsoni);
}

exports.deleteRagazza=(req, res, next) => {
        let jsoni;
        let idRagazza = req.params.id;
        let risultato = Ragazza.deleteByID(idRagazza)
        console.log(risultato);
        if (risultato==0){
            jsoni= { "msg": `id: ${idRagazza} cancellato correttamente ` }
        }else{
            jsoni= { "msg": `id: ${idRagazza} non trovato in lista ` }
        }
        res.json(jsoni);
}

exports.updateRagazza=(req, res, next) => {
        let idRagazza = req.params.id;
        let jsonr = req.body;
        jsonr.id=idRagazza
        let jsoni = {}
        jsoni.ricevuto = { ...jsonr }
        let risultato = Pc.updateByID(idRagazza,jsonr)
        if (risultato==0){
            jsoni.msg = `id: ${idRagazza} aggiornato correttamente `
        }else{
            jsoni.msg = `id: ${idRagazza} non trovato in lista `
        }
        res.json(jsoni);
}
