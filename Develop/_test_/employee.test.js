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
  })
  // email
  it("should set employee email", () => {
      const email = "employee@email.com"
      const newEmployee = new Employee("Sally", 1234, email);
      expect(newEmployee.email).toBe(email);
  })
});




// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'
