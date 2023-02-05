"use strict";
// const { hashString } = require("../src/middlewares/bcrypt.cjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface) =>
      queryInterface.bulkInsert(
         "Identity",
         [
            {
               idNhanKhau: 1,
               soCMT: "000000000001",
               ngayCap: null,
               noiCap: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               idNhanKhau: 2,
               soCMT: "000000000002",
               ngayCap: null,
               noiCap: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               idNhanKhau: 3,
               soCMT: "000000000003",
               ngayCap: null,
               noiCap: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               idNhanKhau: 4,
               soCMT: "000000000004",
               ngayCap: null,
               noiCap: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               idNhanKhau: 5,
               soCMT: "000000000005",
               ngayCap: null,
               noiCap: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               idNhanKhau: 6,
               soCMT: "000000000001",
               ngayCap: null,
               noiCap: null,
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
