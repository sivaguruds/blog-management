import app from './app';
import dotenv from 'dotenv';
import { sequelize } from './database/connection';

dotenv.config();

const port = process.env.PORT;

console.time(port);

sequelize
    .authenticate()
    .then(async () => {
        console.log('Database Connected');
    })
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Applications running on portt ${port}`);
});
