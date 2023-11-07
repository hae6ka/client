import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    status: null,
    title: null,
    text: null,
    imgUrl: null,
    password: null
}

//================================= SelfDevelopment =============================================
export const addSelfDevelopmentPost = createAsyncThunk(
    '/selfdevelopment/addpost',
    async ({ title, text, imgUrl, popularity, password }) => {
        try {
            const { data } = await axios.post('/selfdevelopment/addpost', {
                title,
                text,
                imgUrl,
                popularity,
                password
            });

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getSelfDevelopmentPosts = createAsyncThunk(
    '/selfdevelopment/getposts',
    async () => {
        try {
            const {data} = await axios.get('/selfdevelopment/getposts');

            console.log(data);

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

//================================= Philosophy =============================================
export const addPhilosophyPost = createAsyncThunk(
    '/philosophy/addpost',
    async ({ title, text, imgUrl, popularity, password }) => {
        try {
            const { data } = await axios.post('/philosophy/addpost', {
                title,
                text,
                imgUrl,
                popularity,
                password
            });

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getPhilosophyPosts = createAsyncThunk(
    '/philosophy/getposts',
    async () => {
        try {
            const {data} = await axios.get('/philosophy/getposts');

            console.log(data);

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);


//================================= Psychology =============================================
export const addPsychologyPost = createAsyncThunk(
    '/psychology/addpost',
    async ({ title, text, imgUrl, popularity, password }) => {
        try {
            const { data } = await axios.post('/psychology/addpost', {
                title,
                text,
                imgUrl,
                popularity,
                password
            });

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getPsychologyPosts = createAsyncThunk(
    '/psychology/getposts',
    async () => {
        try {
            const {data} = await axios.get('/psychology/getposts');

            console.log(data);

            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {

        //================================= SelfDevelopment =============================================
        [addSelfDevelopmentPost.pending]: (state) => {
            state.isLoading = true
        },
        [addSelfDevelopmentPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.title = action.payload.title
            state.text = action.payload.text
        },
        [addSelfDevelopmentPost.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },


        [getSelfDevelopmentPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getSelfDevelopmentPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload.posts

        },
        [getSelfDevelopmentPosts.rejected]: (state, action) => {
            state.isLoading = false
        },

        //================================= Philosophy =============================================
        [addPhilosophyPost.pending]: (state) => {
            state.isLoading = true
        },
        [addPhilosophyPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.title = action.payload.title
            state.text = action.payload.text
        },
        [addPhilosophyPost.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },

        
        [getPhilosophyPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getPhilosophyPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload.posts

        },
        [getPhilosophyPosts.rejected]: (state, action) => {
            state.isLoading = false
        },


        //================================= Psychology =============================================
        [addPsychologyPost.pending]: (state) => {
            state.isLoading = true
        },
        [addPsychologyPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.title = action.payload.title
            state.text = action.payload.text
        },
        [addPsychologyPost.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },

        
        [getPsychologyPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getPsychologyPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload.posts

        },
        [getPsychologyPosts.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})

export default postSlice.reducer