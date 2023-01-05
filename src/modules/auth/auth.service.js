import db from "../../../models/index.cjs";
let getAccountByUsername = async (username) => {
   try {
      return await db.Account.findOne({
         where: {
            usename: username,
         },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
export { getAccountByUsername };
