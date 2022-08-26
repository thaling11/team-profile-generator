const Intern = require('../lib/intern');

// school
it("should set the intern's school", () => {
    const schoolInput = "DU";
    const newEmployee = new Intern("Sally", 1234, "employee@email.com", schoolInput);
    expect(newEmployee.school).toBe(schoolInput);
});

// getSchool()
it("should return github with getGithub()", () => {
    const schoolInput = "DU";
    const newEmployee = new Intern("Sally", 1234, "employee@gmail.com", schoolInput);
    expect(newEmployee.getSchool()).toBe(schoolInput);
});

// getRole()—overridden to return 'Intern'
it("should return Intern input with getRole()", () => {
    const internInput = "Intern";
    const newEmployee = new Intern("Sally", 1234, "employee@gmail.com", "DU");
    expect(newEmployee.getRole()).toBe(internInput);
})

