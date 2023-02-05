import db from "../../../models/index.cjs";
let getUserByUsername = async (username) => {
   try {
      return await db.User.findOne({
         where: {
            username: username,
         },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
export { getUserByUsername };
