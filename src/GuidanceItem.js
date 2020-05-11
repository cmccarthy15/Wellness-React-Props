import React from 'react';
import GuidanceItem from './GuidanceItem'

const GuidanceItem = () => {
    return (
        <tr>
            <td>{this.props.factor.title}</td>
            <td><img src={this.props.factor.image} alt={this.props.factor.title}/></td>
            <td>{this.props.factor.color}</td>
            <td>{this.props.factor.description}</td>
        </tr>
    )
}

export default GuidanceItem;