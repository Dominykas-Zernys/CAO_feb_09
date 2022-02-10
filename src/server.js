const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {});

app.listen(PORT, console.log(`server is running on port ${PORT}`));
