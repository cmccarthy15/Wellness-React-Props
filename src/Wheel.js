import React from 'react';
// import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}

                 {this.props.data.map(item => {
                     return (
                         <WellnessItem key={item.id}id={item.id} color={item.color} title={item.title}/> 
                     )
                 })}
            </Pie>
        )
    }
}