const Employee = require('../lib/employee.js')

test('sample employee', () => {
    const employee = new Employee ('Maceo', 8, 'maceomaddox@gmail.com')
    expect(employee.name).toEqual('Maceo')
    expect(employee.id).toEqual(8)
    expect(employee.email).toEqual('maceomaddox@gmail.com')
})

test('getName test', () => {
    const employee = new Employee ('Maceo', 8, 'maceomaddox@gmail.com')
    expect(employee.getName()).toEqual('Maceo')
})

test('getID test', () => {
    const employee = new Employee ('Maceo', 8, 'maceomaddox@gmail.com')
    expect(employee.getID()).toEqual(8)
})

test('getEmail test', () => {
    const employee = new Employee ('Maceo', 8, 'maceomaddox@gmail.com')
    expect(employee.getEmail()).toEqual('steve@gmail.com')
})

test('getRole test', () => {
    const employee = new Employee ('Maceo', 8, 'maceomaddox@gmail.com')
    expect(employee.getRole()).toEqual('Employee')
})