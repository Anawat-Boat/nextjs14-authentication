export interface signProps {
  username: string;
  password: string;
};

  export interface SignIn {
    result: string;
    token: string;
    error?: string;
    username: string;
  }
  
  export interface SignUp {
    result: string;
    error?: string;
  }
  
  export interface GetSession {
    result: string;
    error?: string;
    user?: UserData;
  }
  
  export interface UserData {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    image: string;
    token?: string;
  }
  