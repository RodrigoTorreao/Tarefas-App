import { config } from 'dotenv';
// eslint-disable-next-line import/extensions
import app from './app.js';

config();

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
