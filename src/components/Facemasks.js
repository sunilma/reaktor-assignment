import DisplayItem from './DisplayItem'

const Facemasks = ({facemasks, manufacturer}) => {

    return (
        <div>
            <div className="row">
                {facemasks.map((facemask) => <DisplayItem key={facemask.id} item={facemask} manufacturer={manufacturer} />)}
            </div>    
        </div>
    )
}

export default Facemasks