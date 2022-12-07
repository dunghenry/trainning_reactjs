export function fetchReducer(state, action) {
    switch (action.type) {
        case 'fetchAPI/request':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case 'fetchAPI/success':
        case 'fetchAPI/error':
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                data: action.data,
            };
        default:
            return state;
    }
}
