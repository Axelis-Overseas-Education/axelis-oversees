import mongoose, {Schema} from 'mongoose'

const customerSchema = new Schema(
    {
        name : String,
        email : String,
        phone : Number,
        education : String,
        ielts_exam : String,
        course : String,
        country : String,
        start: String,
        fund : String,
    },
    {
        timestamps:true,
    }
);

const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;