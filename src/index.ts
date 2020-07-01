import 'reflect-metadata';
import {connect} from './config/typeorm';
import { startServer } from './app';

const main = async () => {
    connect();
    const app = await startServer();
    app.listen(5000);
    console.log('server on port', 5000)

}
main();