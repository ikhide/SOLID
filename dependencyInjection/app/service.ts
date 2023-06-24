import { IUserRepository } from "./interfaces";

export class UserCatalog {
  userRepo: IUserRepository;
  constructor(userRepo: IUserRepository) {
    this.userRepo = userRepo;
  }
  listAllUsers(): Array<string> {
    return this.userRepo.listAllUsers();
  }
}
