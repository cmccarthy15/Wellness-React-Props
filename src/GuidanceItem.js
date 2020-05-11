import React from 'react';

const GuidanceItem = (props) => {
    // console.log(props.factor)
    const {title, image, description, stars, isPriority} = props.factor
    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{'⭐️'.repeat(stars)}</td>
            <td>{isPriority ? 'Yes':'No'}</td>
        </tr>
    )
}

export default GuidanceItem;