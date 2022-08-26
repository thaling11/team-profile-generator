const Manager = require('../lib/manager');

// officeNumber
it("should set an office number", () => {
    const officeNumberValue = 303;
    const newEmployee = new Manager("Sally", 1234, "employee@email.com", officeNumberValue);
    expect(newEmployee.officeNumber).toBe(officeNumberValue)
});

it("should get the office number with function", () => {
    const officeNumberValue = 303;
    const newEmployee = new Manager("Sally", 1234, "employee@email.com", officeNumberValue);
    expect(newEmployee.getOfficeNumber()).toBe(officeNumberValue);
});

// getRole()—overridden to return 'Manager'
it("should return Manager input", () => {
    const managerInput = "Manager";
    const newEmployee = new Manager("Sally", 1234, "employee@email.com", 303);
    expect(newEmployee.getRole()).toBe(managerInput);
})
