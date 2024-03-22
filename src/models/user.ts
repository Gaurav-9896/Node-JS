import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  Age:number;
  email: string;
  gender :string
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  Age :{type :Number,required : true},
  email: { type: String, required: true, unique: true },
  gender: {type :String}

});

export default mongoose.model<IUser>("User", UserSchema);
