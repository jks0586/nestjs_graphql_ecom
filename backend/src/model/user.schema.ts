import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop({required:true})
    fullname: string;
    @Prop({required:true, unique:true, lowercase:true})
    email: string;
    @Prop({required:true})
    password: string
    @Prop({default:'0'})
    is_admin: Number
    @Prop({default: Date.now() })
    createdDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User)