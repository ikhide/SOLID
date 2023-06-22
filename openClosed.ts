class Footballer {
  name: string;
  age: number;
  role: PlayerRole;

  constructor(name: string, age: number, role: PlayerRole) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getRole(): string {
    return this.role.getRole();
  }
}

// PlayerRole class uses the getRole method
class PlayerRole {
  getRole(): string {
    return "";
  }
}

// Sub classes for different roles extend the PlayerRole class
class GoalkeeperRole extends PlayerRole {
  getRole(): string {
    return "goalkeeper";
  }
}

class DefenderRole extends PlayerRole {
  getRole(): string {
    return "defender";
  }
}

class MidfieldRole extends PlayerRole {
  getRole(): string {
    return "midfielder";
  }
}

class ForwardRole extends PlayerRole {
  getRole(): string {
    return "forward";
  }
}

// Putting all of them together
const hazard = new Footballer("Hazard", 32, new ForwardRole());
console.log(`${hazard.name} plays in the ${hazard.getRole()} line`); // Hazard plays in the forward line

const kante = new Footballer("Ngolo Kante", 31, new MidfieldRole());
console.log(`${kante.name} is the best ${kante.getRole()} in the world!`); //Ngolo Kante is the best midfielder in the world!

const showName = (name) => {
  if (name === "john") {
    console.log(name + "is male");
  } else if (name === "joy") {
    console.log(name + "is female");
  }
};

showName("john");
