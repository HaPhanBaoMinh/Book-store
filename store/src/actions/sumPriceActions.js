const updateSumPrice = (data) => {
    try {
        return{
            type: 'UPDATE_PRICE',
            payload: data
        }
    } catch (error) { 
        console.log(error.message);
    } 
}

export { updateSumPrice };