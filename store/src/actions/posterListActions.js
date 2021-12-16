const getPosterList = (data) => {
    try {
        return{
            type: 'GET_POSTERLIST',
            payload: data
        }
    } catch (error) { 
        console.log(error.message);
    } 
}

export { getPosterList };