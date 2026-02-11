const express = require('express');
const app = express();
app.use(express.json());

app.get('/inventory', (req, res) => {
    res.json([{ id: 1, stock: 50 }]);
});

app.post('/inventory/restock', (req, res) => {
    res.json({ id: req.body.id, newStock: 60 });
});

app.post('/inventory/sell', (req, res) => {
    res.json({ id: req.body.id, newStock: 49 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
