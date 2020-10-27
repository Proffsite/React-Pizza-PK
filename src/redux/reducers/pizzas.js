
const initislState = {
    items: [],
    isLoaded: false,
};

const pizzas = (state = initislState, action) => {

    if (action.type === 'SET_PIZZAS') {
        return{
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }
    return state;
};

export default pizzas;