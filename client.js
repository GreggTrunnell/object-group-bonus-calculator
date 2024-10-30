// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('PROVIDED array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.

function calculateIndividualEmployeeBonus( employee ) {  
//console.log to confirm the array is in the function
console.log('Incomeing Employee', employee)

let bonusPercentage = 0
//Those who have a rating of a 2 or below should not receive a bonus.
if (employee.reviewRating <=2){
  console.log(`Employee's rating is 2 or less: `)
  bonusPercentage= 0
}

// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
if (employee.reviewRating === 3){
  console.log(`Employess's rating is 3: `)
  bonusPercentage += 4
}

// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
if (employee.reviewRating === 4){
  console.log(`Employee's with rating of 4: `)
  bonusPercentage = 6
}

// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
if (employee.reviewRating === 5){
  console.log(`Employee's with rating of 5: `)
  bonusPercentage = 10
}

console.log('Base bonus', bonusPercentage)

console.log(`\tEmployee Number: ${employee.employeeNumber} - Length: ${employee.employeeNumber.length}`)

// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
//Employee number will need to be changed from string to a number.

          //here we're accessing the employeeNumber string.  When we call the .length it will coundt the letters/spaces
const employeeNumberDig= employee.employeeNumber.length
              
if (employeeNumberDig === 4){
    console.log(`\tI'm getting a pool!`)
    bonusPercentage += 5
}
 console.log('\tbonus after digit count', bonusPercentage)

// console.log("\tBase Bonus: ", bonusPercentage)

// console.log(`\tEmployee Number: ${employee.employeeNumber} - Length: ${employee.employeeNumber.length}`)

// const employeeNumberDig = employee.employeeNumber.length
// // If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// if (employeeNumberDig === 4) {
//   console.log("\tEmployee has been around for a while!")
//   bonusPercentage += 5
// }
// console.log("\tBonus after digit count:", bonusPercentage)


let mockReturn ={
  name: 'NAME',
  bonusPercentage: 'BONUS PERCENTAGE',
  totalCompensation: 'TOTAL COMPESATION',
  totalBonus: 'TOTAL BONUS',
}
return mockReturn



  // your logic here

  // return new object with bonus results
  }//!End of calculateIndividualEmployeeBonus function
const testEmployee =calculateIndividualEmployeeBonus(employees[0])
console.log("Result for individual Employee:", employees[0])


