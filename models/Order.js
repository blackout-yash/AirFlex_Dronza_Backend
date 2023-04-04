import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    shippingInfo: {
        hNo: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
        pinCode: {
            type: Number,
            require: true
        },
        phoneNo: {
            type: Number,
            require: true
        }
    },
    orderItems: {
        drone1: {
            price: {
                type: Number,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            }
        },
        drone2: {
            price: {
                type: Number,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            }
        },
        drone3: {
            price: {
                type: Number,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            }
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        // ref: 'User' => id comes from user models
        ref: 'User',
        require: true
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Online'],
        default: 'COD'
    },
    paymentInfo: {
        type: mongoose.Schema.ObjectId,
        ref: 'Payment'
    },
    paidAt: Date,
    itemsPrice: {
        type: Number,
        default: 0
    },
    taxPrice: {
        type: Number,
        default: 0
    },
    shippingCharges: {
        type: Number,
        default: 0
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    orderStatus: {
        type: String,
        enum: ['Assembling', 'Shipped', 'Delivered'],
        default: 'Assembling'
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Order = mongoose.model('Order', schema)