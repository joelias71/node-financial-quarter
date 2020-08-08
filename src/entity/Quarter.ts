import { ObjectType, Field } from "type-graphql";
import { Income } from "./Income";

@ObjectType()
export class Quarter {

    @Field(() => [Income])
    income:Income[];

    @Field({ nullable: true })
    count:number;

    @Field({ nullable: true })
    total: number;
}