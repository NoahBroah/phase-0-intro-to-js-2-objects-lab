const employee = {
    name: 'Noah',
    streetAddress: 'Home'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    console.log(newEmployee)
    console.log([key])
    console.log(value)
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.streetAddress = '12 Broadway';
    return employee;
}

/*function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    console.log(newEmployee)
    delete newEmployee[key]
    //newEmployee.name = 'Sam';
    console.log(newEmployee);
    return newEmployee;
}
const newEmployee = {
    name: 'Tod',
    streetAddress: 'Home'
}
deleteFromEmployeeByKey(newEmployee,'streetAddress');
*/

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}