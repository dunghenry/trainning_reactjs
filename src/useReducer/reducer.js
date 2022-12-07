export const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                count: state.count + action.payload,
            };
        case 'DECREASE':
            return {
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
