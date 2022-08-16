export default function Build(value){
    const startDay = value.clone().startOf("month").startOf("week")
    const endDay = value.clone().startOf("month").startOf("week")
    const day = startDay.clone().subtract(2, "day")

    const calenderBackup = [] 

    while (day.isBefore(endDay, 'day')){
        calenderBackup.push(
            Array(42).fill(0).map(() => day.add(1, "day").clone())
        )
    }

    return(calenderBackup);
}