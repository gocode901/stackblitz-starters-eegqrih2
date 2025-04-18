import mongoose from " mongoose";

// const workingHospitals= new mongoose.Schema({
//     workingHospital:{
//         type: mongoose.Schema.Type.ObjectId,
//         ref: "Hospital",
//     },
//     workingHours:{
//         type: Number,
//         required: true,
//     }
// })


const doctorSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    qualification:{
        type: String,
        required:true,
    },
    experienceInYears:{
        type: Number,
       default : 0,
    },
    workingHospitals:
    // [workingHospitals]
    [
        {
            type:mongoose.Schema.Type.ObjectId,
            ref:"Hospital"
        }
    ]

},{ timestamps: true})

export const Doctor= mongoose.model("Doctor", doctorSchema)