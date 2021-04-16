module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Cauculadora123.",
    DB: "db_library",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle:10000
    }
};