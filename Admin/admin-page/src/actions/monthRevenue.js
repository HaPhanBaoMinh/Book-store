const getMonthRevenueAction = (data) => {
    try {
        return {
            type: "GET_MONTHREVENUE",
            payload: data
        }
    } catch (error) {
        throw error
    }
}

export { getMonthRevenueAction }