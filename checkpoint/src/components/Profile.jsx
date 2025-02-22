import {Component } from 'react'

class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="card text-center" style={{width: "18rem"}}>
                <img src={this.props.person.imgSrc} class="card-img-top" alt="Profile Picture" />
                <div class="card-body">
                    <h5 class="card-title">{this.props.person.fullName}</h5>
                    <p class="card-text">{this.props.person.bio}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Profession:</strong> {this.props.person.profession}</li>
                </ul>
            </div>
        )
    }
}

export default Profile