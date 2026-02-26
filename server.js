const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('<h1>AI Food Menu</h1><p>AI语音点餐系统正在开发中...</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
