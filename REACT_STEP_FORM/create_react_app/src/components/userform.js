import React, { Component } from 'react'

export class userform extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName:'',
        email :'',
        occupation : '',
        city : '',
        bio :''
    }

    // Proceed to next step
    nextStep  = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }



    // Go Back to previos step
    prevStep  = () => {
        const { step } = this.state;
        this.setState({
            step: step  - 1
        });
    }


    // Handle Fields Change
    handleChange = input => e => {
       this.setState({[input]: e.target.value})
    }






    render() {
        const { step } = this.state;
        const { firstName , lastName , email , occupation , city, bio } = this.state
        const values = { firstName , lastName , email , occupation , city, bio } 
      
        switch(step){
            case 1: 
            return (
                <FormUserDetails

                />
            )

        }
    }
}

export default userform

