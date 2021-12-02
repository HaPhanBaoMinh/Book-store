const express = require("express");
const revenue = express.Router();
const {getMonthRevenue} = require('../controller/Trading_report/monthRevenueController');
const {getTodayRevenue} = require("../controller/Trading_report/daylyRevenueController");


revenue.get("/month", getMonthRevenue);
revenue.get("/today", getTodayRevenue);

module.exports = revenue;