import {combineReducers} from 'redux';

const songsReducers = () => {
    return [
        {title: 'title1', duration: 'duration1'},
        {title: 'title2', duration: 'duration2'}
    ];
};

const selectedSongReducer = (selectedSong = undefined, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});

