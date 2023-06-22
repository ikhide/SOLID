// Cohesion
class Square {
  side = 5;

  public area(): number {
    return this.side * this.side;
  }
  public perimeter(): number {
    return this.side * 4;
  }

  public draw(): void {
    // Draw square
  }
  public rotate(degree: number): void {
    // rotate and render square
  }
}

// In the above, area and perimeter have high cohesion but area and draw do not.
// Methods that are related should hae their own class.
class Square2 {
  side = 5;

  public area(): number {
    return this.side * this.side;
  }
  public perimeter(): number {
    return this.side * 4;
  }
}

class SquareUI {
  public draw(): void {
    // Draw square
  }
  public rotate(degree: number): void {
    // rotate and render square
  }
}

//Coupling

class Users {
  public save(data): { id: number } | undefined {
    try {
      // Connect to db
      // Save to db
      return { id: 123 };
    } catch (err) {
      console.log(err);
    }
  }
  public createUser() {
    const newUser = this.save;
    return newUser;
  }
  public updateUser() {
    // return updated user
  }
}

// In the above class, there is high coupling between users data and the db connection.
// The db connection should be in a Repository class, while the user methids remaain in the User class

class Repository {
  public save(data): { id: number } | undefined {
    try {
      // Connect to db
      // Save to db
      return { id: 123 };
    } catch (err) {
      console.log(err);
    }
  }
}

class User {
  repo;
  constructor() {
    this.repo = new Repository();
  }

  public createUser() {
    const newUser = this.repo.save();
    return newUser;
  }
  public updateUser() {
    // return updated user
  }
}

const useMe = new User();
console.log(useMe.createUser());
