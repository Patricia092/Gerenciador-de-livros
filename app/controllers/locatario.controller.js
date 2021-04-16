const db = require("../model");

Locatario = db.locatario;
const Op = db.sequelize.Op; 

exports.create = (req, res) => {
    if (!req.body.nome){
        res.status(400).send({
            message: " O nome não pode ser Vazio!"
        })
        return;
    }
    const locatario = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        status: req.body.status ? req.body.status : false
    }
    Locatario.create(locatario)
        .then ((data) => {
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message: err.message || "Erro interno ao cadastrar o Locatário"
            })
        })

};

exports.findAllPublished = (req, res) => {
    Locatario.findAll({where: {statusCadastro: true}})
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar o locatário"
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Locatario.destroy ({where: {id : id}})
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Locatário deletado com sucesso"
        });
      } else {
        res.send({
          message: `Não foi possível deletar o locatário de id: ${id}, locatário não encontrado ou body vazio`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao deletar o locatário de id: ${id}`
      })
    })
  }
  