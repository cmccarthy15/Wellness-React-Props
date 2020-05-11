import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';

// console.log(wellnessFactors) //array of objects
// console.log(WellnessItem) //component needs id, color, title as props, use destructuring assignemnt
export default class Wheel extends React.Component {

    render(){
        return (
            <Pie size={300}>
                {wellnessFactors.map((factor, index) => <WellnessItem factor={factor} key={index}/>)}
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
            </Pie>
        )
    }
}