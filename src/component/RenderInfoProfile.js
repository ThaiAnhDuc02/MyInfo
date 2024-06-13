const localStorageUserInfo = JSON.parse(window.localStorage.getItem("UserInfo"))
console.log(localStorageUserInfo)


const RenderInfoProfile =  (localStorageUserInfo) =>{
        const imgCover = document.querySelector("#imgCover");
        imgCover.src = localStorageUserInfo.image;
        const fullNameElement = document.querySelector("#fullName");
        fullNameElement.textContent = localStorageUserInfo.fullName;
        const positionElement = document.querySelector("#position")
        positionElement.textContent = localStorageUserInfo.position;
        const experienceElement = document.querySelector("#experience");
        experienceElement.textContent = `Experience: ${localStorageUserInfo.experience}`;
        const emailElement = document.querySelector("#email");
        emailElement.textContent = `Email: ${localStorageUserInfo.email}`; 
        const socialElement = document.querySelector("#social");
        socialElement.textContent = `Social: ${localStorageUserInfo.social}`;
        const phoneElement = document.querySelector("#phone");
        phoneElement.textContent = `Phone: ${localStorageUserInfo.phone}`
  
}
export default RenderInfoProfile