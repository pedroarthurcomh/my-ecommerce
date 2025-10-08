const fs = require('fs');
const path = require('path');

const dataPath = path.join(process.cwd(), 'api.json');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    const db = JSON.parse(data);

    const url = req.url.split('?')[0];
    const resource = url.startsWith('/') ? url.substring(1).split('/')[0] : url.split('/')[0];

    if (!resource) {
      res.status(400).send({ error: 'Nenhum recurso especificado.' });
      return;
    }

    if (db[resource]) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(db[resource]);
    } else {
      res.status(404).send({
        error: `Recurso '${resource}' não encontrado no JSON.`,
        availableResources: Object.keys(db),
      });
    }
  } catch (error) {
    console.error('Erro ao processar API:', error.message);
    res.status(500).send({
      error: 'Falha na Função Serverless (Erro Interno)',
      details: error.message,
      dataPathChecked: dataPath,
    });
    return;
  }
};
