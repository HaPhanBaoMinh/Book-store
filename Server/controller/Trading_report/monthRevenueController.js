const daylyRevenueModels = require("../../Models/Trading_report/dayly");
const confirmList = require("../../Models/HistoryOrder/historyOrder");
const dateNow = require("../../function/handleDate");
const monthRevenueModels = require("../../Models/Trading_report/monthly");

const updateRevenuemonthly = async (req, res) => { // Cập nhật doabg thu của tháng hiện tại
    const daylyList = await daylyRevenueModels.find( {"date.month": dateNow().month});
    let totalRevenueOfMonth = 0; 
    await daylyList.map(item => {
        totalRevenueOfMonth += item.total;
    })
    await monthRevenueModels.findOneAndUpdate({isCurrentMonth: true}, {total: totalRevenueOfMonth});

    res.status(200).json(daylyList);
}

const createNewMonth = async(req, res) => { // Tạo Object data cho tháng mới
    await monthRevenueModels.findOneAndUpdate({isCurrentMonth: true}, {isCurrentMonth: false});
    const newMonth = new monthRevenueModels({});
    try {
        await newMonth.save(); 
        res.status(200).json({"Result":"Create successful!"});
    } catch (error) {
        res.status(400).send();
    }
}

const getMonthRevenue = async (req, res) => {
    const monthRevenue = await monthRevenueModels.find();
    // console.log(monthRevenue);
    try { 
        
        res.status(200).json(monthRevenue);
    } catch (error) {
        res.status(400).send();
    }
    // res.send("OK")
}

module.exports = {updateRevenuemonthly, createNewMonth, getMonthRevenue};