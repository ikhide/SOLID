import { UserFactory } from "./app/factory";
import { UserCatalog } from "./app/service";
import { IUserRepository } from "./app/interfaces";

class ECommerceMainApplication {
  userRepository: IUserRepository = UserFactory.create();
  userCatalog = new UserCatalog(this.userRepository);
}

const app = new ECommerceMainApplication();
console.log(app.userCatalog.listAllUsers());
