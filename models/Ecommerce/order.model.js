import mongoose from " mongoose";

const orderItemsSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "Product"
    },
    qunatity:{
        type: Number,
        required: true,
    }
})

const OrderSchema= new mongoose.Schema({
    orderPrice:{
        type: Number,
        required : true,
    },
    customer:{
          type: mongoose.Schema.Type.ObjectId,
          ref: "User"
    },
    orderItems:{
           type:[orderItemsSchema]
    },
    address:{
        type: String,
        required: true,
    }
    
},{ timestamps: true, }); 

export const Order= mongoose.model("Order", OrderSchema);