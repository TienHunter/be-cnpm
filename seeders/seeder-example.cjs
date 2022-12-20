"use strict";
const { hashString } = require("../src/middlewares/bcrypt.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface) =>
      queryInterface.bulkInsert(
         "Accounts",
         [
            {
               usename: "admin1",
               password: hashString("123456"),
               role: "R1",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               usename: "leader1",
               password: hashString("123456"),
               role: "R2",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               usename: "leader2",
               password: hashString("123123"),
               role: "R3",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               usename: "member1",
               password: hashString("123456"),
               role: "R4",
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
