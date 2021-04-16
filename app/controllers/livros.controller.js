const db = require("../model");

Livro = db.livros;
const Op = db.sequelize.Op; 

exports.create = (req, res) => {
    if (!req.body.nome){
        res.status(400).send({
            message: "O Nome do livro não pode estar vazio!"
        })
        return;
    }
    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        lancamento: req.body.lancamento,
        aluguel: req.body.aluguel,
        status: req.body.status ? req.body.status : false,
    }
    Livro.create(livro)
        .then ((data) => {
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message: err.message || "Erro interno ao cadastrar o Livro"
            })
        })

};

exports.findAll = (req, res) => {
    Livro
    .findAll()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar livros publicados"
        });
    });
};

exports.findByAutor = (req, res) => {
 
    const autor = req.params.autor;
  
    Livro.findAll({where: {autor : autor}})
    .then((data) => {
        if (!data){
            res.status(404).send({message : "Autor não encontrado"})
        }      
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Erro interno ao buscar o Autor: ${autor}`
      });
    });
}
exports.update = (req, res) => {
    const id = req.params.id;
  
    Livro.update(req.body, {
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Livro atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o livro de id: ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o livro de id: ${id}`
      })
    })
  }
  

