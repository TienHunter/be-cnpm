import db from "../../../models/index.cjs";
let getAccountByUsername = async (email) => {
   try {
      return await db.Account.findOne({
         where: {
            usename: email,
         },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
export { getAccountByUsername };
