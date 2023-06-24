import { SqlUserRepository } from "./repository";

export class UserFactory {
  static create() {
    return new SqlUserRepository();
  }
}
