import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key} = props.product;
    const reviewItemStyle =  {
        borderBottom:'2px solid lightgray',
        marginBottom:'5px',
        paddingBottom: '5px',
        marginLeft:'200px'

    }
    return (
        <div style={reviewItemStyle}>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <button 
                className='main-button'
                onClick={()=>props.handleRemoveProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;