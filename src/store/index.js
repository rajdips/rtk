import { configureStore, createSlice, builder } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const indx = state.indexOf(action.payload);
            state.splice(indx, 1);
        },
        resetMovie(state, action) {
            return [];

        }
    }

});

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetSong(state, action) {
            return [];
        },
        extraReducers(builder) {
            builder.addCase(movieSlice.actions.resetMovie.toString, (state, action) => {
                return [];
            });
        }
    }

});

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer
    }

});
console.log(songSlice.actions);
/*
store.dispatch({
type: 'song/addSong',
payload: 'Nodire'
});*/

////store.dispatch(songSlice.actions.addSong('gaaner opare'));

//console.log(store.getState());

console.log("SONGS ACTIONS", songSlice.actions);

const { addSong, removeSong, resetSong, extraReducers } = songSlice.actions;
const { addMovie, removeMovie, resetMovie } = movieSlice.actions;

export { store, addSong, removeSong, addMovie, removeMovie, resetSong, resetMovie, extraReducers };