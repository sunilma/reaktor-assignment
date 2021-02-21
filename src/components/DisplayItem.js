
const DisplayItem = ({item, manufacturer}) => {

    const getInStock = () => {
        const rand = Math.floor(Math.random() * 6000)
        //displaying random availability
        if (manufacturer.length > 0) {
            const seller = manufacturer.filter(manufacturer => manufacturer.seller === item.manufacturer)[0]
            return seller.availability[rand].DATAPAYLOAD
        }
        //checking if the id exists in the availability
        /*if (manufacturer.length > 0) {
            const seller = manufacturer.filter(manufacturer => manufacturer.seller === item.manufacturer)[0]
            const payload = seller.availability.filter(product => product.id === item.id)
            if (payload.length > 0) {
                return payload[0].DATAPAYLOAD
            } else {
                return "stock info not found"
            }
        }*/
    }

    return (
        <div className="card col-md-3" style={{width: "18rem"}} >
            <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p>Price: {item.price}</p>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Colors: {item.color.map((vari) => vari)}</p>
                <p>Availability: {manufacturer.length > 0 ? getInStock() : "loading"}</p>
            </div>
        </div>
    )
}

export default DisplayItem