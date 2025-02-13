import PrimaryButton from '../../PrimaryButtons/PrimaryButton'
import'./Hero.css'

const Hero = ({title , description , placeholder}) => {
    return (
        <div className='hero'>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="btn-group">
                <input type="search" name="search" id="search" placeholder={placeholder} />
                <PrimaryButton  btn= "Subscribe" />
            </div>
        </div>
    )
}

export default Hero
