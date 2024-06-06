import React from 'react'

const TestLogin = () => {
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const isValid = validateForm();
        if (isValid) {
          
          try {
            const res = await axiosClient.post("/users/login",formData)
            
            if(res.data.status === "ok"){
              toast.success("user is successfully login")
              setItem(KEY_ACCESS_TOKEN,res.data.data)
              navigate("/")
            } 
            else{
              toast.error(res.data.message)
            }
          } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>
             toast.error(axiosError.response?.data.message)
          }
    
        } else {
          return 
        }
      };
  return (
    <div>
      login
    </div>
  )
}

export default TestLogin
