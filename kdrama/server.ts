import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes/shows';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});