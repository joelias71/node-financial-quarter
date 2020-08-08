import { Query, Resolver, Arg, Int} from 'type-graphql'
import { Quarter } from '../entity/Quarter'
import { loadData } from '../data/data'

@Resolver()
export class QuarterResolver {

    @Query(() => Quarter)
    getByMonth(@Arg('month',() => Int, { nullable: true }) month: number) {
        
        let data = loadData()
        let qtr = new Quarter();

        if(data.length === 0){
            qtr.income = []
        } else {
            qtr.count = data.meta.count
            qtr.total = data.meta.total
            if(!month) {
                qtr.income = data.data
            } else {
                qtr.income = data.data.filter((element: any) => 
                    new Date(element.date.toString()).getMonth() === month
                )
            }
        }

        return qtr
    }
}