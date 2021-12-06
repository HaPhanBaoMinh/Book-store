const loginAction = (data) => {
    try {
        return {
            type: 'LOGIN',
            payload: data
        }
    } catch (error) { 
        console.log(error.message);
    } 
}

export {loginAction}