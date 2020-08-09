import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Income {

    @Field({ nullable: true })
    interval: String;

    @Field({ nullable: true })
    revenue: number;
}