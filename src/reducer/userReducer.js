// Reducer

const initialState = JSON.parse(window.localStorage.getItem("UserInfo")) || {
        image:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/444764332_1559137794657519_4355940375350879347_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFCmZMuOPAYd4gAfD1xgGCktQYjvNOAUTq1BiO804BROtAywlEbuunuzxD30Y6AgYO0YLMJjqFvCoxaNVAqzZy4&_nc_ohc=mrEJLrHqzCMQ7kNvgEbYx0x&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBBz9FN2yEC0BnB8tBuZkDRm7cRsjAv5QUkZAlzCWh-NQ&oe=666DD88E",
        experience: "Intern",
        fullName: "Thái Anh Đức",
        position: "Front-end Developer",
        phone: "0343732190",
        email: "Thaiducdev@gmail.com",
        social: "https://github.com/ThaiAnhDuc02",
    }

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_INFO":
            return{ 
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default userReducer