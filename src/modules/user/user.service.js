import db from "../../../models/index.cjs";
let getAllAccount = async () => {
   try {
      return await db.Account.findAll({
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
export { getAllAccount };
