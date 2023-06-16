class User {
  constructor(name, role = "user") {
    if (role !== "admin" && role !== "user") {
      alert("Invalid role");
    }

    this.name = name;
    this.role = role;
    this.logIn = false;
  }

  getName() {return this.name;}
  getRole() {return this.role;}
  login() {this.logIn = true;}
  logout() {this.logIn = false;}

  changeName(newName) {this.name = newName;}
  changePassword(newPassword) {
    this.password = newPassword;
  }
};

const user = new User("Ivan");
console.log(`The ${user.getRole()} is ${user.getName()}`);

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(name) {
    const user = this.users.find(user => user.getName() === name);
    if (user) {
      user.role = "another role";
    }
    this.users = this.users.filter(user => user.getName() !== name);
  }

  getAllUsers() {return this.users;}
  removeAllUsers() {this.users = [];}
}

const admin = new Admin("Petro");
console.log(`The ${admin.getRole()} is ${admin.getName()}`);


admin.addUser(user);
console.log(admin.getAllUsers());

admin.removeUser("Ivan");
console.log(admin.getAllUsers());
