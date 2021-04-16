module.exports = (sequelize, DataTypes) => {
    const tb_livros = sequelize.define('tb_livros', {
      livro: DataTypes.STRING,
      autor: DataTypes.STRING,
      sinopse: DataTypes.STRING,
      lancamento: DataTypes.DATE,
      aluguel: DataTypes.DATE,
      status_livro: DataTypes.BOOLEAN
    }, {});
  
    return tb_livros;
  };