const  RenderInfoEdit = async (store, listElements) => {
    const {
        imgCoverElement,
        selectExperienceElement,
        inputFullNameElement,
        inputPositionElement,
        inputPhoneElement,
        inputEmailElement,
        inputSocialElement
        } = listElements
    console.log("store", store)

    imgCoverElement.src = store.image
    selectExperienceElement.options[selectExperienceElement.selectedIndex].text = store.experience;
    inputFullNameElement.value = store.fullName;
    inputPositionElement.value = store.position
    inputPhoneElement.value = store.phone;
    inputEmailElement.value = store.email;
    inputSocialElement.value = store.social;
}
export default RenderInfoEdit