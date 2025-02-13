import './Card.css'

const Card = ({img , alt , NameAndDateOfBirth , title , icon ,descrption}) => {
  return (
    <>
      <div className='card-item'>
        <div className="img">
            <img src={img} alt={alt} />
        </div>
        <div className="card-info">
            <h3>{NameAndDateOfBirth}</h3>
            <div className="card-body">
                <h1>{title}</h1>
                <i>{icon}</i>
            </div>
            <p>{descrption}</p>
        </div>
      </div>
    </>
  
  )
}

export default Card
