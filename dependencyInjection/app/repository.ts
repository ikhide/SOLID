import { IUserRepository } from "./interfaces";

export class SqlUserRepository implements IUserRepository {
  listAllUsers(): Array<string> {
    return ["soap", "shoe"];
  }
}
