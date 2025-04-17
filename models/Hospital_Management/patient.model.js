import mongoose from " mongoose";

const PatientSchema= new mongoose.Schema({

    name:{
        type: String,
        required: true,

    },
    address:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    bloodGroup:{
        type: String,
        required: true,
    },
    gender: {
        tylpe:String,
        enum: ["M", "F", "0"],
        required : true,
    },
    admitedIn:{
        
    }
},{ timestamps: true})

export const Patient= mongoose.model("Patient", PatientSchema)