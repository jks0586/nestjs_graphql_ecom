import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type CategoryDocument = Category & Document;
@Schema()
export class Category {
    @Prop({required:true})
    name: string;
    @Prop({required:true})
    description: string;
    @Prop({required:true})
    image: string
    @Prop()
    parent: Number
    @Prop({required:true})
    meta_title: string
    @Prop({required:true})
    meta_description: string
    @Prop({required:true})
    meta_keywords: string
    @Prop({default:'0'})
    order: Number
    @Prop({default:'0'})
    status: Number
    @Prop({default: Date.now() })
    createdDate: Date
}

export const CategorySchema = SchemaFactory.createForClass(Category)