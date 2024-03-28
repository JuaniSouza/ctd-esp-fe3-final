export const reducer = (state, action) => {
    switch(action.type) {
        case 'DARK_THEME':
            return {...state, theme: !action.payload}
            case 'ADD_FAV': {
                const alreadyFav = state.favs.some((fav) => fav.id === action.payload.id);
                return {
                ...state,
                favs: alreadyFav
                    ? state.favs
                    : [...state.favs, action.payload],
                };
            }
        case 'ELIMINAR_FAV':
            return {...state, favs: state.favs.filter( (fav) => fav.id !== action.payload )}
    }
}
