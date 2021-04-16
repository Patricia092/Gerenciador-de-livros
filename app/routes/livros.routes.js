module.exports = app => {
    const livros = require ("../controllers/livros.controller");

    var rota = require ("express").Router();
    rota.post("/", livros.create); 
    
    rota.get("/", livros.findAll);
    
    rota.get("/:autor", livros.findByAutor);
    
    rota.put("/:id", livros.update);
        
    app.use("/api/livros", rota)
}