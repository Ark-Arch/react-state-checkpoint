import { Component } from "react";
import Profile from "./components/Profile";
import ToggleButton from "./components/ToggleButton";


class App extends Component {
  constructor(){
    super();

    this.state = {
      person : {
        fullName: 'Lionel Messi',
        bio:'A world cup winner',
        imgSrc:'/lionel_messi.jpg',
        profession:'FootBaller'
      },
      shows : false,
      timeSinceMounted: 0
    }
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState((state) => ({
        timeSinceMounted: state.timeSinceMounted + 1
      }));
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  toggleProfile = () => {
    this.setState(
      {
        shows: !this.state.shows
      }
    )
  }

  render() {
    return (
      <div className="container">
        {
          this.state.shows ? <Profile person={this.state.person}/> : <span></span>
        }
        <span>
        <ToggleButton visibility={this.state.shows} callBackToggle={this.toggleProfile}/>
        <p>time passed since this component was mounted: {this.state.timeSinceMounted} seconds</p>
        </span>
      </div>
    )
  }
}

export default App