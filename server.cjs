const express = require('express');
const ibmdb = require('ibm_db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  DATABASE: 'SVDPRD',
  HOSTNAME: '10.24.3.54',
  PORT: 50000, // default DB2 port
  PROTOCOL: 'TCPIP',
  UID: 'ttopnov',
  PWD: 'G4.c$s8UqA'
};

app.get('/data', (req, res) => {
  ibmdb.open(dbConfig, (err, conn) => {
    if (err) return res.status(500).send(err);

    conn.query('SELECT * FROM CLIENTE WHERE IDENTIFICACION in (71752865)', (err, data) => {
      if (err) {
        conn.close();
        return res.status(500).send(err);
      }

      res.send(data);
      conn.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
