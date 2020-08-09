import { Query, Resolver } from 'type-graphql'
import { Quarter } from '../entity/Quarter'
import { loadData, getIncome } from '../data/data'

@Resolver()
export class QuarterResolver {

    @Query(() => Quarter)
    getByMonth() {
        
        let data = loadData()
        let qtr = new Quarter();

        if(data.length === 0){
            qtr.income = []
        } else {
            qtr.count = data.meta.count
            qtr.total = data.meta.total
            qtr.income = getIncome(data.data)
        }

        return qtr
    }
}