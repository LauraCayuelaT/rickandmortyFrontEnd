import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAVORITES  } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state=initialState,action)=>{


    switch(action.type){
        // case ADD_FAV: 
        //     return ({...state,
        //         myFavorites: [...state.allCharacters,action.payload],
        //         allCharacters: [...state.allCharacters,action.payload], //Creamos una copia para no pisar el estado original y poder hacer el filtrado
        //     })

        case ADD_FAV:
            
             return { ...state, myFavorites: [...state.myFavorites,action.payload], allCharacters: [...state.myFavorites,action.payload] };

        // case REMOVE_FAV:
        //     return({...state,
        //         myFavorites: state.myFavorites.filter((char)=>  char.id !== action.payload)
        //     })

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case FILTER:
            
            const allCharFiltered = state.allCharacters.filter((char)=>char.gender===action.payload)

            return {...state,
                myFavorites:allCharFiltered,
            }

        case ORDER:
            return {...state,
            
            myFavorites: 
                    action.payload ==="A" 
                    ? state.allCharacters.sort((a,b)=> a.id - b.id) 
                    : state.allCharacters.sort((a,b)=> b.id - a.id)
                    
                }
        case GET_FAVORITES:
            return {...state, myFavorites: action.payload}
            
            

        default:
            return ({...state})
    }



}

export default rootReducer;