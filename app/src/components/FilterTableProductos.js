import React from 'react'


export default class FilterableProductTable extends React.Component {

    constructor(){
        super()
    }
    render (){
        return (
            <div>
                <SearchBar/>
                <ProductTable/>

            </div>
        )
    }
}