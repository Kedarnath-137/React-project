
export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after finished developing...
    //  token:
    // 'BQDKKQ6m32WaedPu3qQ1qTGzGtAamh4jV1izzbM4pNy-_uHkLbVM9UxApfMLfPH5_AmUTxyuLfpTO7_hOT99Ir7Lz7lwcP-xUFppeNC4CFFNouJAFkMUrGqHi59hOWyCUlQ92mzuCqG3s5JxRrLb2h_WAEeXMySZX6Vp4iG69DGrOxC6PH9zu4qOBHkPIKrWtvGBvI_fJxrsakVX-m5q'
}

const reducer = (state, action) =>{
    console.log(action)
    //Action -> type, [payload];
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
           return{
            ...state,
            token:action.token
           } 
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,

            }
        default:
            return state;

    }

}
export default reducer;