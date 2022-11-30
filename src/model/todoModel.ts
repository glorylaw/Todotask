import mongoose,{Schema} from "mongoose";

export interface todoAttribute{
    _id:string;
    description:string;
    status:boolean;

}

const todoSchemma=new Schema({
    description:{type:String,required:true},
    status:{type:Boolean}
},
{
    timestamps:true
})

const TodoInstance =mongoose.model<todoAttribute>("Todo",todoSchemma)

export default TodoInstance

