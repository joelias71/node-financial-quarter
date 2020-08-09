import * as fs from 'fs';
import * as path from 'path';

export function loadData() {
    try {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '/sales.json'), 'utf8'));
    } catch (e) {
        return []    
    }
}

function getMonthlyIncome(month :number, data :[]) {
    const textMonths = ['January','February','March','April','May','June','July','August'
    ,'September','October','November, December']

    const dataByMonth = data.filter((element :any) => new Date(element.date.toString()).getMonth() === month)
    const totalByMonth = dataByMonth.reduce((a :any, b :any) => a + b.total, 0)

    return {interval: textMonths[month], revenue: totalByMonth}
}

export function getIncome(data :[]) {
    const allMonths = data.map((i:any) => new Date(i.date).getMonth())
    const months = [...new Set(allMonths)]
    months.sort()
    return months.map(m => getMonthlyIncome(m,data))
}

export function getTotal(data :[]) {
    const amounts = data.map((month:any) => month.total)
    return amounts.reduce((a :any, b :any) => a + b, 0)
}