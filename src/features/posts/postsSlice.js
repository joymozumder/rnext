import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postAPI";
// import { build } from "vite";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPost',
    async () => {
        const posts = await getPosts();
        return posts;
    }
)

//'posts/fetchPost' = name of action which is generated from middleware
//2nd parameter: actual api to fetch data
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        /*
        builder.addCase(fetchPosts.pending, (state)=>{ 
            state.isError = false;
            state.isLoading = true;
        }); //case, reducer

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
        */

        
        builder
            .addCase(fetchPosts.pending, (state)=>{ 
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    }

});

export default postsSlice.reducer;