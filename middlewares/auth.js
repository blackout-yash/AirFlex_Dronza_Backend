// Google Authentication

import errorHandler from '../utils/errorHandler.js'

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies['connect.sid'];
    if (!token) {
        return next(new errorHandler('Not logged in', 401))
    }
    next()
}

export const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return next(new errorHandler('Only Admin Allowed', 405))
    }

    next()
}