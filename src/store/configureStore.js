const { createStore } = window.Redux
import userReducer from '../reducer/userReducer.js';

// Lấy trạng thái từ localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("UserInfo");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Lưu trạng thái vào localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("UserInfo", serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

const persistedState = loadState();

const configureStore = createStore(
    userReducer,
    persistedState
);

// Lắng nghe các thay đổi trong store và lưu lại vào localStorage
configureStore.subscribe(() => {
    saveState(configureStore.getState());
});

export default configureStore;