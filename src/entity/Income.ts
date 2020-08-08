import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Income {

    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    total: number;

    @Field({ nullable: true })
    date: String;
}