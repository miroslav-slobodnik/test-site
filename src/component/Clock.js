import React from "react";

const formatDate = ( date ) => {
    const options = { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleString("en", options);
}

const formatTime = ( date ) => {
  const options = { 
    hour: 'numeric',
    minute: 'numeric', 
    second: 'numeric',
    hour12: false
  };
  return date.toLocaleString("en", options);
}

class Clock extends React.Component {

    constructor( props ) {
        super(props)
        this.state = {
            currentDateTime: new Date()
        }
    }

    componentDidMount() {
        setInterval(
            () => this.setState( 
                {
                    currentDateTime: new Date()
                }
            ), 
            1000
        );
    }

    render() {
        const dateTime = this.state.currentDateTime;
        return (
            <>
                <h2>{ formatDate(dateTime) }</h2>
                <h2>{ formatTime(dateTime) }</h2>
            </>
        );
    }
}

export default Clock;