import { getContacts,createContact,getSingleContacts,updateContact,deleteContact,} from "../controller";
import { loginRequired,login,register } from "../controller/userControllers";


// const {getContacts,createContact,getSingleContacts,updateContact,deleteContact} =  require("../controller")
// const {loginRequired,register,login} = require("../controller/userControllers")


const routes = (app) => {
  app.route("/api")
    .get(loginRequired, getContacts)
    .post(loginRequired, createContact)
    .put(loginRequired, updateContact)
    .delete(loginRequired, deleteContact);

  app.route("/auth/register").post(register);

  app.route("/login").post(login);
    

  app.route("/api/:id")
    .get(loginRequired, getSingleContacts)
    .put(loginRequired, updateContact)
    .delete(loginRequired, deleteContact);
};

export default routes;
