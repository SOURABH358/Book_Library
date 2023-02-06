import { createSlice } from "@reduxjs/toolkit";
export const AppSlice = createSlice({
        name:"AppSlice",
        initialState:{
            show:'',
            books:[],
            subjects:[],
            query:''
        },
        reducers:{
            updateShow:(state)=>{
                state.show = 'show'
            },
            removeShow:(state)=>{
                state.show = ''
            },
            updateBooks:(state,action)=>{
                state.books.push({query:action.payload.query,data:action.payload.data})
            },
            updateSubjects:(state,action)=>{
                state.subjects.push({query:action.payload.query,data:action.payload.data})
            },
            updateQuery:(state,action)=>{
                state.query = action.payload.query
            }
        }
    })

export const {updateShow,removeShow, updateBooks, updateSubjects, updateQuery} = AppSlice.actions;
export default AppSlice.reducer
