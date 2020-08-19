const React = require('react'); 

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Crew Member Page</h1>
                <form action='/crewMembers' method='POST'>
                    Name: <input type='text' name='name'/><br/>
                    Rank: <input type='text' name='rank'/><br/>
                    Home Planet: <input type='text' name='homePlanet'/><br/>
                    Engineering Access: <input type='checkbox' name='engineeringAccess'/><br/>
                    <input type='submit' name='' value='Submit New Member'/>
                </form>
            </div>
        )
    }
}

module.exports = New; 