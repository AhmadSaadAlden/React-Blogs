import { Link } from 'react-router'
import './SignInPage.css'
import SecondaryButtons from '../SecondaryButtons/SecondaryButtons'

const SignInPage = ({info , action , btn  , linkpage}) => {
  return (
    <>
    {Array.isArray(info) && info?.map((item , index) =>(
      <div className="signin" key={index}>
        <div className='info'>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div className='form'>
          <form action={action} method="POST">
            <div>
              <input type="email" name="email" id="email" placeholder = {item.placeholderEmail} required />
            </div>
            <div>
              <input type="password" name="password" id="password"  placeholder = {item.placeholderPassword} required />
            </div>
            <div>
              <SecondaryButtons  btn={btn} />
            </div>
          </form>
          <span>{item.account} <Link to={linkpage}  className='signup'>{item.register}</Link></span>
        </div>
      </div>
    ))}
    </>
  )
}

export default SignInPage