import { Component } from 'react'


class ToggleButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={() => this.props.callBackToggle()}>
                {this.props.visibility === false ? "Show Profile":"Close Profile"}
            </button>
        )
    }
}

export default ToggleButton