import express from 'express'
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, placeOrder, placeOrderOnline, processOrder } from '../controllers/order.js'
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.post('/createorder', isAuthenticated, placeOrder)

router.get('/myorders', isAuthenticated, getMyOrders)

router.get('/order/:id', isAuthenticated, getOrderDetails)

router.get('/admin/orders', isAuthenticated, authorizeAdmin, getAdminOrders)

router.get('/admin/order/:id', isAuthenticated, authorizeAdmin, processOrder)


router.post('/createorderonline', isAuthenticated, placeOrderOnline)
router.post('/paymentverification', isAuthenticated, paymentVerification)


export default router 