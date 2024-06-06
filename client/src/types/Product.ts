
// Interfaces for API Responses
export interface ApiResponse<T> {
  status: string;
  statusCode: number;
  data: T;
  message: string;
}

export interface IProduct {
  // Define the structure of your Product object
      _id:string
      name:string,
      description:string,
      image:string,
      category:string,
      price:string,
  // add other fields as necessary
}

export interface IProductWithQuantity extends IProduct  {
  quantity: number;
}

export interface UserProfile {
  // Define the structure of your User Profile object
  _id: string;
  email: string;
  name:string,
  
  // add other fields as necessary
}

// Interface for Error Response
export interface ErrorResponse {
  status: string;
  statusCode: number;
  message: string;
}