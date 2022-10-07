import React, { Component } from 'react';
import axios from 'axios';



class Fetch1 extends Component {
    constructor()
    {
        super()
        this.state={
            user:[],
            data:[{name:"Rakesh"},{name:"Raghav"}]
        }
    }

    componentDidMount(){
        axios("https://api.github.com/users")
        .then((response)=>{
            
            // [ {login},{login},{} ]
            this.setState({user:(response.data)});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className='githubuser'>
           
                {
                    this.state.user.map((val,i)=>{
                        return ( <img key={i} src={val.avatar_url} alt="" height="300px" /> )
                    })
                }
            
                
            </div>
        );
    }
}

export default Fetch1;


// Why map method | HOC 