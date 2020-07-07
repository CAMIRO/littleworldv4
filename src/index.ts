import 'reflect-metadata';
import { connect } from './config/typeorm';
import { startServer } from './app';

const main = async () => {
    connect();
    const app = await startServer();
    
    const PORT : string|number = process.env.PORT || 5000
    app.listen(PORT, () =>  console.log(`Server started on port ${PORT}`) );
    

}
main();