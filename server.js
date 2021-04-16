const express = require ('express');
const db = require ("./app/model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json({message: "Livraria Crud"});
});

db.sequelize.sync();

require("./app/routes/livros.routes")(app);
require("./app/routes/locatario.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
