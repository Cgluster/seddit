import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        beginGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditFulfilled(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsRejected(state) {
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const {
    beginGetSubreddits,
    getSubredditFulfilled,
    getSubredditsRejected
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(beginGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditFulfilled(subreddits));
    } catch (error) {
        dispatch(getSubredditsRejected());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;