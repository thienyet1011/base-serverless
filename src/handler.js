'use strict';

module.exports.generateRandomNumber = async (event) => {
  const random_number = parseInt(Math.random() * 10);
  console.log('The random generated integer is ', random_number);
  return random_number;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
