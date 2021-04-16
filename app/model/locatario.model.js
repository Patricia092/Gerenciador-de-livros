module.exports = (sequelize, DataTypes) => {
    const tb_locatario = sequelize.define('tb_locatario', {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {});
    
    return tb_locatario;
  };