module.exports = async (req, res) => {
  // Enhanced error handling and logging
  console.log('Incoming request:', req.method, req.body);

  // CORS Configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { flag } = req.body;
    console.log('Received flag:', flag);

    const correctFlag = 'robot{elliot_alderson}';
  
    if (flag === correctFlag) {
      return res.status(200).json({ 
        message: 'Congratulations! You solved the challenge!',
        correct: true
      });
    } else {
      return res.status(200).json({ 
        message: 'Incorrect flag. Try again!',
        correct: false 
      });
    }
  } catch (error) {
    console.error('Flag submission error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      details: error.message 
    });
  }
};
