import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class ThankYou extends Component {

    handleNext = () => {
        console.log('next clicked');
        
        // this.props.dispatch({
        //     type: 'ADD_REVIEW_FEEDBACK',
        //     payload: this.state.feels
        // })
        this.props.history.push('/'); 
    }

    render() {
        return (
            <>
                <h1>Thank You!</h1>
                <button onClick={this.handleNext}>Leave New Feedback</button>
            </>
        );
    }
}

export default connect()(ThankYou);