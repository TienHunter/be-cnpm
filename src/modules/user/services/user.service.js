import db from "../../../../models/index.cjs";
let getUserList = async () => {
   try {
      return await db.User.findAll({
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
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
export { getUserList, getUserByUsername };
