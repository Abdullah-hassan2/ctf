// /functions/checkFlag.js

exports.handler = async (event, context) => {
    // Parse the body of the incoming POST request to get the submitted flag
    const { flag } = JSON.parse(event.body);
  
    // Define the correct flag
    const correctFlag = 'robot{elliot_alderson}';
  
    // Check if the submitted flag is correct
    if (flag === correctFlag) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Congratulations! You have solved this challenge!' })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Incorrect flag. Try again!' })
      };
    }
  };
  