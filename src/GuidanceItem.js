import React from 'react';

const GuidanceItem = () => {
    /**
     * TODO: There's a bug somewhere here! What's wrong or missing?
     * 
     */
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{props.factor.description}</td>
        </tr>
    )
}

export default GuidanceItem;