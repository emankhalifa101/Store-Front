import express, { Application, Request, Response }  from 'express';
import config from './config';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import routes from './routes';
import errorHandler from './middleware/errorHandler';

import db from './db';


const app:Application = express();
const PORT = config.port || 3000;

const limiter = rateLimit({
	windowMs: 20 * 60 * 1000, 
	max: 5,
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:'Too many requests created from this IP, please try again after an hour',
})
// to pares requests
app.use(express.json());
app.use(morgan('common')); // for http logger
app.use(helmet()); // for security

app.use(limiter)

app.use('/api',routes);

app.get('/', (req:Request, res: Response)=> {
    res.json({
        messege: 'welcome on our store'
    })
});

db.connect().then(client=> {
   return client.query('SELECT NOW()').then((res)=> {
    client.release();
    console.log('hii',res.rows);
   })
   .catch(error => {
    client.release();
    console.log('error',error)
   })

})

app.use(errorHandler);
// handling for un exist route
app.use((__req: Request, res:Response)=>{
    res.status(404).json('this is un Exist route please use a valid route ')

})

app.listen(PORT, () => {
    console.log(`Server is starting at prot:${PORT}`);
});

export default app;