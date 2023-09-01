import {connect} from "react-redux"
import Card from "./Card/Card";

const Favorites=({myFavorites})=>{
    return(
        <div>
            {
                myFavorites &&
                myFavorites.map((pepito)=>{
                    return (
                        <Card
                        key={pepito.id}
                        id={pepito.id}
                        name={pepito.name}
                        status={pepito.status}
                        species={pepito.species}
                        gender={pepito.gender}
                        origin={pepito.origin}
                        image={pepito.image}
                        onClose={pepito.onClose}
                        />
                    )
                })
            }

        </div>
    )

}

const mapStateToProps = (state)=>{

    return {
        myFavorites : state.myFavorites
    }
};


export default connect(mapStateToProps,null) (Favorites);