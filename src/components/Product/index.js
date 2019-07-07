import React from 'react';

const Product = ({ match, data }) => {
    let product = data.find(p => p.id === match.params.productId);
    let productData;

    if(product) {
        const { name, description, status } = product;

        productData = (
            <div className='product'>
                <h3>{ name }</h3>
                <p>{ description } </p>
                <hr />
                <h4>{ status } </h4>
            </div>
        )
    } else {
        productData = <h2> Sorry. Product doesnt exist </h2>;
    }
    return (
        <>
            { productData }
        </>
    )
};

export default Product;