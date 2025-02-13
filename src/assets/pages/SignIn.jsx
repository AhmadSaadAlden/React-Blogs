import Container from "../components/Container/Container"
import SignInPage from "../components/SignInPage/SignInPage"
import SecondaryButtons from "../components/SecondaryButtons/SecondaryButtons"

const SignIn = () => {

  const info = [
    {
      title : "Sign in" , 
      description : "Enter your email and password to sign in !" ,
      placeholderEmail : "Enter your email" , 
      placeholderPassword : "Enter your Password" , 
      account : "Don't have an account?" ,
      register : "Sign up" , 
    }
  ]
  
  return (
    <>
      <Container>
        <SignInPage  info = {info} action="/signin" btn = "Sign In" linkpage = "/SignUp">
          <SecondaryButtons />
        </SignInPage>
      </Container>
      
    </>
  )
}

export default SignIn
