import { updateInfoUser } from "../action/userAction.js";
import RenderInfoEdit from "../component/renderInfoEdit.js";
import configureStore from "../store/configureStore.js";

//store
const store = configureStore;
console.log(store.getState());

const infoUserFormElement = document.querySelector("#userInfoForm");
if (infoUserFormElement) {
    const userInfoNeedUpdate = store.getState();
    console.log('userInfoNeedUpdate', userInfoNeedUpdate);
    
    const imgCoverElement = document.querySelector("#img_cover");
    const selectExperienceElement = document.querySelector("#experience");
    const inputFullNameElement = document.querySelector("#fullName");
    const inputPositionElement = document.querySelector("#position");
    const inputPhoneElement = document.querySelector("#phone");
    const inputEmailElement = document.querySelector("#email");
    const inputSocialElement = document.querySelector("#social");

    const listFormElements = {
        imgCoverElement,
        selectExperienceElement,
        inputFullNameElement,
        inputPositionElement,
        inputPhoneElement,
        inputEmailElement,
        inputSocialElement
    };

    RenderInfoEdit(userInfoNeedUpdate, listFormElements);
    
    // Store initial form state
    const initialFormState = {
        image: imgCoverElement.src,
        experience: selectExperienceElement.options[selectExperienceElement.selectedIndex].text,
        fullName: inputFullNameElement.value,
        position: inputPositionElement.value,
        phone: inputPhoneElement.value,
        email: inputEmailElement.value,
        social: inputSocialElement.value
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const currentFormState = {
            image: imgCoverElement.src,
            experience: selectExperienceElement.options[selectExperienceElement.selectedIndex].text,
            fullName: inputFullNameElement.value,
            position: inputPositionElement.value,
            phone: inputPhoneElement.value,
            email: inputEmailElement.value,
            social: inputSocialElement.value
        };
        
        // Check if form is changed
        const formChanged = Object.keys(initialFormState).some(key => initialFormState[key] !== currentFormState[key]);

        if (!formChanged) {
            alert("No information fields are changed");
            return;
        }
        alert("Update Successfully")

        // Dispatch update action
        const action = updateInfoUser(currentFormState);
        store.dispatch(action);
    };

    infoUserFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log('State Updated', store.getState());
});
