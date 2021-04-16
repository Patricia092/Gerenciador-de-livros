module.exports = app => {
    const locatario = require ("../controllers/locatario.controller");

    var rota = require ("express").Router();
    rota.post("/", locatario.create);
        
    rota.get("/ativos", locatario.findAllPublished);
         
    rota.delete("/:id", locatario.delete);
    
    app.use("/api/locatario", rota)
}