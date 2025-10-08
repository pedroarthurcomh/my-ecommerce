const fs = require('fs');
const path = require('path');

const dataPath = path.join(process.cwd(), 'api.json');

module.exports = (req, res) => {
  try {

    const data = fs.readFileSync(dataPath, 'utf-8');
    const db = JSON.parse(data);

  
    const url = req.url.split('?')[0]; 
    const resource = url.split('/')[1];


    if (db[resource]) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(db[resource]);
    } else {
      res.status(404).send({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to read data.', details: error.message });
  }
};