import './SignUpPage.css'
import SignInPage from '../SignInPage/SignInPage'


const SignUpPage = ({info , action , btn , linkpage}) => {
  return (
    <>
    {Array.isArray(info) && info?.map((item , index) =>(
        <div key={index} className="signupGroup">
            <input type="text" name="username" id="username" placeholder = {item.placeholderUserName} required />
            <SignInPage info={[item]} action={action} btn={btn} linkpage={linkpage} />
        </div>
    ))}
    </>
  )

}

export default SignUpPage