const React = require('react'); 

class Edit extends React.Component {
    render(){
        const { _id, name, rank, homePlanet, engineeringAccess} = this.props.crewMember; 
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/crewMembers/${_id}?_method=PUT`} method='POST'>

                    Name: <input type='text' name='name' defaultValue={name}/><br/>
                    Rank: <input type='text' name='rank' defaultValue={rank}/><br/>
                    Home Planet: <input type='text' name='homePlanet' defaultValue={homePlanet}/><br/>
                    Engineering Access: <input type='checkbox' name='engineeringAccess' checked={engineeringAccess}/><br/>
                    <input type='submit' name='' value='Submit Changes'/>

                </form>
            </div>
        )
    }
}

module.exports = Edit; 