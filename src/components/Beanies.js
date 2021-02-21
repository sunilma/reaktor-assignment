import DisplayItem from './DisplayItem'

const Beanies = ({beanies, manufacturer}) => {

    return (
        <div>
            <div className="row">
                {beanies.map((beanie) => <DisplayItem key={beanie.id} item={beanie} manufacturer={manufacturer} />)}
            </div> 
        </div>
    )
}

export default Beanies