
import  React  from 'react';

interface CounterState {
    count: number;
}

class CounterWithClass extends React.Component<{},CounterState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props : any) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    render(){
        console.log(this);
        const {count} = this.state;
        return <button onClick={()=> this.setState({count: count+1})}>{count}</button>;
    }
}


export default CounterWithClass;