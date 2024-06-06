import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { useEffect } from 'react'
import { getMYInfo } from '../redux/slice/appConfigSlice'

const Home:React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMYInfo())
  },[])
 
  return (
    <>
      
       <div className='max-w-6xl mx-auto'>
        <h1>homepage</h1>
        <Outlet/>
       </div>
    </>
  )
}

export default Home
