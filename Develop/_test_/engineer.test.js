const Engineer = require('../lib/engineer')

// github—GitHub username
it("should set a github username", () => {
    const githubUser = "Sally12";
    const newEmployee = new Engineer("Sally", 1234, "employee@email.com", githubUser);
    expect(newEmployee.github).toBe(githubUser);
});

// getGithub()
it("should return github with getGithub()", () => {
    const githubUser = "Sally12";
    const newEmployee = new Engineer("Sally", 1234, "employee@gmail.com", githubUser);
    expect(newEmployee.getGithub()).toBe(githubUser);
});

// getRole()—overridden to return 'Engineer'
it("should return Engineer input with getRole()", () => {
    const engineerInput = "Engineer";
    const newEmployee = new Engineer("Sally", 1234, "employee@gmail.com", "Sally12");
    expect(newEmployee.getRole()).toBe(engineerInput);
})