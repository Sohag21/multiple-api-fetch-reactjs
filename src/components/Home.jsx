import React, { Component } from 'react';
import {
    Table,
    Container,
    Button
} from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            primaryfun:true,
        }

    }

    primaryfun(){
        // alert('hi')
        this.setState({
            primaryfun:false,
        })
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
            

    } 
    
    // componentDidMount() {

    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 items: json,
    //                 isLoaded: true, 
    //             })
    //         }).catch((err) => {
    //             console.log(err);
    //         });

    // }

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded)
            return <div>Loading...</div>;
        return (
            <div>
                <h1>Home Page</h1>
                {/* <div>
                    <Button onClick={()=>this.primaryfun()} className="btn-sm m-2" variant="outline-dark">Primary</Button>
                    <Button onClick={()=>this.secondaryfun()} className="btn-sm m-2" variant="outline-dark">Secondary</Button>
                </div> */}
                <Container>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name} </td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }

                    {/* extra */}
                    {
                        // this.state.primaryfun?
                        // items.map(item => (
                        //     <tr key={item.id}>
                        //         <td>{item.name} </td>
                        //         <td>{item.email}</td>
                        //     </tr>
                        // ))
                        // :items.map(item => (
                        //     <tr key={item.id}>
                        //         <td>{item.name} </td>
                        //         {/* <td>{item.email}</td> */}
                        //     </tr>
                        // ))
                    }
                
                </tbody>
                </Table>
                </Container>
            </div>
        );
    }
}

export default Home;