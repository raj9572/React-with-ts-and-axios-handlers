import { AxiosError } from 'axios'
// import pizzas from '../../pizza-data'
import ProductItem from '../components/ProductItem'
import { ApiResponse, ErrorResponse, IProduct } from '../types/Product'
import { toast } from 'react-toastify'
import { axiosClient } from '../Utils/axiosClient'
import { useEffect, useState } from 'react'
// import { useAppDispatch, useAppSelector } from '../redux/hooks'
// import { getAllProducts } from '../redux/slice/appConfigSlice'

const Product = () => {
  const [allPizzas, setAllPizzas] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  // const dispatch = useAppDispatch()
  // const AllPizzas = useAppSelector(state => state.appConfigReducer.products)

  const fetchAllProducts = async() =>{
       try {
           setLoading(true)
           const res = await axiosClient.get<ApiResponse<IProduct[]>>("/products/fetchProducts")
           if(res.data.status === "ok"){
             setAllPizzas(res.data.data)
           }
       } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>
        toast.error(axiosError.response?.data.message)
       } finally{
        setLoading(false)
       }
  }


  useEffect(() =>{
     fetchAllProducts()
    //  dispatch(getAllProducts())
  },[])
   
  return (
    <div className='py-6'>
      {loading && <div className='text-lg text-black font-medium text-center'>Loading.....</div> }
          <div className='flex flex-wrap gap-8 justify-center'>
              {
                allPizzas?.map(pizza => ( <ProductItem key={pizza.name} product={pizza} /> ))
              }
          </div>
    </div>
  )
}

export default Product
