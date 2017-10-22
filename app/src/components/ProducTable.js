import React from 'react'

export default class ProductTable extends React.Component {

    constructor(){

    }
    render() {
        return (
            <div>
                <ProductCategoryRoot/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductCategoryRoot/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
            </div>  
        )
    }
}