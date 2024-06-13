export const updateInfoUser = (info) =>{
    console.log('info:  ', info)
    return {
         type: "UPDATE_INFO",
         payload: info
    }
}