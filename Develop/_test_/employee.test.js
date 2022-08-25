const Employee = require("../lib/employee");
//create a new employee
describe("Employee", () => {
  it("should create a new employee", () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe("object");
  });

  // name
  it("should set employee name", () => {
    const name = "Sally";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
  });
  // id
  it("should set employee ID", () => {
      const id = 1234;
      const newEmployee = new Employee("Sally", id);
      expect(newEmployee.id).toBe(id);
  });
  // email
  it("should set employee email", () => {
      const email = "employee@email.com"
      const newEmployee = new Employee("Sally", 1234, email);
      expect(newEmployee.email).toBe(email);
  });
  // getName()
  it("should get the name of the employee from getName()", () => {
    const nameInput = "Sally";
    const newEmployee = new Employee(nameInput);
    expect(newEmployee.getName()).toBe(nameInput); 
  });
  // getId()
  it("should get the employee ID from getID()", () => {
    const idInput = 1234;
    const newEmployee = new Employee(idInput);
    expect(newEmployee.getID()).toBe(idInput); 
  });
  // getEmail()
  it("should get the employee email from getEmail()", () => {
    const emailInput = "employee@email.com";
    const newEmployee = new Employee(emailInput);
    expect(newEmployee.getEmail()).toBe(emailInput); 
  });
});




// getRole()—returns 'Employee'
