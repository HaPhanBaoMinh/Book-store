const daylyRevenueModels = require("../../Models/Trading_report/dayly");
const confirmList = require("../../Models/HistoryOrder/historyOrder");
const dateNow = require("../../function/handleDate");

const updateRevenuedayly = async (req, res) => {
    const confirmListdayly = await confirmList.find({confirmDay: dateNow()});
    let totalRevenue = 0;
    await confirmListdayly.map(item => {
        totalRevenue += item.total;
    })

    const revenue = await {
        total: totalRevenue,
        date: dateNow()
    }
    // console.log(totalRevenue);
    const sumRevenue = new daylyRevenueModels(revenue);
    try {
        await sumRevenue.save();
    } catch (error) {
        throw error
    }
    res.status(200).json({totalRevenue: totalRevenue});
}

const getTodayRevenue = async (req, res) => {
    const todayRevenue = await daylyRevenueModels.find( {"date.date": dateNow().date} ); 

    try { 
        res.status(200).json(todayRevenue);
    } catch (error) {
        res.status(400).send();
    }
}

module.exports = {updateRevenuedayly, getTodayRevenue};