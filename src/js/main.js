import configureStore from "../store/configureStore.js";
import RenderInfoProfile from "../component/RenderInfoProfile.js";

const localStorageUserInfo = JSON.parse(window.localStorage.getItem("UserInfo"))
console.log(localStorageUserInfo)
const store = configureStore.getState();
console.log("renderStore:  ",store)
const infos =  localStorageUserInfo ? localStorageUserInfo : store
RenderInfoProfile(infos);

