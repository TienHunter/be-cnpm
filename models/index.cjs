"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
// console.log("config:", config);
let sequelize;
if (config.use_env_variable) {
   sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
   sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
   );
}

fs.readdirSync(__dirname)
   .filter((file) => {
      return (
         file.indexOf(".") !== 0 &&
         file !== basename &&
         file.slice(-3) === ".js"
      );
   })
   .forEach((file) => {
      const model = require(path.join(__dirname, file))(
         sequelize,
         Sequelize.DataTypes
      );
      db[model.name] = model;
   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// model new
db.Identity = require("./chung_minh_thu.cjs")(sequelize, Sequelize);
db.Correction = require("./dinh_chinh.cjs")(sequelize, Sequelize);
db.Family = require("./gia_dinh.cjs")(sequelize, Sequelize);
db.Household = require("./ho_khau.cjs")(sequelize, Sequelize);
db.DeathDeclaration = require("./khai_tu.cjs")(sequelize, Sequelize);
db.Resident = require("./nhan_khau.cjs")(sequelize, Sequelize);
db.TemporaryResidence = require("./tam_tru.cjs")(sequelize, Sequelize);
db.TemporaryAbsent = require("./tam_vang.cjs")(sequelize, Sequelize);
db.MemberOfHousehold = require("./thanh_vien_cua_ho.cjs")(sequelize, Sequelize);
db.Biography = require("./tieu_su.cjs")(sequelize, Sequelize);
db.User = require("./user.cjs")(sequelize, Sequelize);
// model old
// db.Account = require("./Account.cjs")(sequelize, Sequelize);
// db.Household = require("./Household.cjs")(sequelize, Sequelize);
// db.Resident = require("./Resident.cjs")(sequelize, Sequelize);
// console.log("db:", db);
Object.keys(db).forEach((modelName) => {
   if (db[modelName].associate) {
      db[modelName].associate(db);
   }
});
module.exports = db;
