"use strict";
const { hashString } = require("../src/middlewares/bcrypt.cjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface) =>
      queryInterface.bulkInsert(
         "User",
         [
            {
               username: "admin1",
               password: hashString("123456"),
               idNhanKhau: 1,
               role: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               username: "admin2",
               password: hashString("123456"),
               idNhanKhau: 2,
               role: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               username: "admin3",
               password: hashString("123456"),
               idNhanKhau: 3,
               role: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               username: "admin4",
               password: hashString("123456"),
               idNhanKhau: 4,
               role: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      ),

   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   },
};
