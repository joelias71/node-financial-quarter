import { Query, Resolver } from 'type-graphql'
import { Quarter } from '../entity/Quarter'
import { loadData, getIncome, getTotal } from '../data/data'

@Resolver()
export class QuarterResolver {

    @Query(() => Quarter)
    getByMonth() {
        
        let data = loadData()
        let qtr = new Quarter();

        if(data.length === 0){
            qtr.income = []
            qtr.total = 0
        } else {
            qtr.income = getIncome(data.data)
            qtr.count = data.meta.count
            qtr.total = getTotal(data.data)
        }

        return qtr
    }
}