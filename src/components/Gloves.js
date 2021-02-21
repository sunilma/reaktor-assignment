
import DisplayItem from './DisplayItem'


const Gloves = ({gloves, manufacturer}) => {

   /*const displayGlove = (glove) => (
        <div key={glove.id}>
            <h3>Name: {glove.name}</h3>
            <p>Price: {glove.price}</p>
            <p>Manufacturer: {glove.manufacturer}</p>
            <p>Colors: {glove.color.map((item) => item)}</p>
        </div>
        <div className="card col-md-3" style={{width: "18rem"}} key={glove.id}>
            <div className="card-body">
                <h5 className="card-title">Name: {glove.name}</h5>
                <p>Price: {glove.price}</p>
                <p>Manufacturer: {glove.manufacturer}</p>
                <p>Colors: {glove.color.map((item) => item)}</p>
            </div>
        </div>
    )*/


    return (
        <div>
            <div className="row">
                {gloves.map((glove) => {
                return <DisplayItem key={glove.id} item={glove} manufacturer={manufacturer} />
                })}
                
            </div>
        </div>
    )
}

export default Gloves