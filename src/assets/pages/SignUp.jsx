import Container from "../components/Container/Container"
import SignUpPage from "../components/SignUpPage/SignUpPage"

const SignUp = () => {

  const info = [
      {
          title : "Sign Up" , 
          description : "Enter your email and username , password to sign up!" ,
          placeholderUserName : "Enter your username" ,
          placeholderEmail : "Enter your email" , 
          placeholderPassword : "Enter your Password" , 
          account : "Have an account?" ,
          register : "LogIn"
      }
  ]

  return (
    <>
    <Container>
        <SignUpPage info={info} action="/signUp" btn="Sign Up" linkpage="/SignIn" />
    </Container>
    </>
  )
}

export default SignUp