import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';
// import WellnessItem from './WellnessItem';
// console.log(GuidanceItem)
// console.log(wellnessFactors) //array of objects
// console.log(WellnessItem)

export default class GuidanceContainer extends React.Component {
    

    renderItemInfo = () => {
        wellnessFactors.sort((a, b) => {return b.stars - a.stars})
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority</td>
                        </tr>
                    </thead>
                    <tbody>
                        {wellnessFactors.map((factor, index) => <GuidanceItem factor={factor} key={index} />)}
                        {/** TODO:  Render GuidanceItems here
                                    Check the GuidanceItem component for the expect props
                                    BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                                            Can you find it? 
                                            What warning did you get and how did it help you?
                        */}
                           
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}