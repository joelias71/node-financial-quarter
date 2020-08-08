import { Query, Resolver } from 'type-graphql'

@Resolver()
export class QuarterResolver {
    @Query(() => String)
    hello() {
        return "Hello World"
    }
}