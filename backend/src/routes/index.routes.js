import MyRouter from './router.js';
import UserRouter from './api/user.routes.js';
import ProductRouter from './api/products.routes.js';
import CartRouter from './api/carts.routes.js';
import MailsRouter from './api/mails.routes.js';
import OrderRouter from './api/orders.routes.js';
import LoggersRouter from './api/loggers.routes.js';

const logger = new LoggersRouter();
const users = new UserRouter();
const products = new ProductRouter();
const carts = new CartRouter();
const mails = new MailsRouter();
const orders = new OrderRouter();

export default class IndexRouter extends MyRouter {
  init() {
    this.read('/', (req, res) => res.status(200).send('ECOMMERCE API'));
    this.use('/products', products.getRouter());
    this.use('/carts', carts.getRouter());
    this.use('/users', users.getRouter());
    this.use('/mail', mails.getRouter());
    this.use('/orders', orders.getRouter());
    this.use('/loggers', logger.getRouter());
  }
}