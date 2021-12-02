const daylyRevenueModels = require("../../Models/Trading_report/dayly");
const monthRevenueModels = require("../../Models/Trading_report/monthly");

const resetYearRevenue = async () => {
    await daylyRevenueModels.remove({});
    await monthRevenueModels.remove({});
}

module.exports = resetYearRevenue
