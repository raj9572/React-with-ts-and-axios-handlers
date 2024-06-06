import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {  ApiResponse, IProduct, UserProfile } from '../../types/Product'
import { axiosClient } from '../../Utils/axiosClient'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../types/Product'
import { toast } from 'react-toastify'

export interface AppConfigSlice {
  profile: UserProfile,
  products:IProduct[]
}

const initialState: AppConfigSlice = {
   profile:{} as UserProfile,
   products:[] as IProduct[]
}


export const getMYInfo = createAsyncThunk<UserProfile,void>('user/getmyinfo', async () => {
    try {
        const response = await axiosClient.get<ApiResponse<UserProfile>>('/users/profile')
        return response.data.data


    } catch (error) {
        console.log('error',error)
        const axiosError = error as AxiosError<ErrorResponse>
        toast.error(axiosError.response?.data.message)
        return Promise.reject(axiosError)
    }
}
)


export const getAllProducts = createAsyncThunk<IProduct[], void>('products/getallproducts', async () => {

    try {
        const response = await axiosClient.get<ApiResponse<IProduct[]>>('/products/fetchProducts')
        return response.data.data


    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>
        return Promise.reject(axiosError)
    }
    

}
)

export const appConfigSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addToCart: (state,action:PayloadAction<IProduct>) => {
      
        const index = state.products?.findIndex(item => item?._id === action.payload?._id)

        if(index === -1){
            state.products.push({...action.payload})
        }
    },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getMYInfo.fulfilled, (state, action) => {
                state.profile = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action:PayloadAction<IProduct[]>) => {
                 state.products = action.payload
            })
        
    }
    
  },
)

// Action creators are generated for each case reducer function
export const {addToCart  } = appConfigSlice.actions

export default appConfigSlice.reducer