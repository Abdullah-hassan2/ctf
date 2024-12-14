// For Vercel, use module.exports instead of exports.handler
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method === 'POST') {
    const { flag } = req.body;
    
    // Define the correct flag
    const correctFlag = 'robot{elliot_alderson}';
  
    // Check if the submitted flag is correct
    if (flag === correctFlag) {
      res.status(200).json({ 
        message: 'Congratulations! You have solved this challenge!' 
      });
    } else {
      res.status(400).json({ 
        message: 'Incorrect flag. Try again!' 
      });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};