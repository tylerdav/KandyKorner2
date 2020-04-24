import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../productType/ProductTypeProvider"
import { LocationContext } from "../location/LocationProvider"
import Product from "./Product"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)
    const { locations } = useContext(LocationContext)
    const { productTypes } = useContext(ProductTypeContext)


    return (
        products.map(product => {
            const type = productTypes.find(c => c.id === product.productTypeId)
            const store = locations.find(l => l.id === product.locationId)

            return <Product key={product.id}
                product={product}
                productType={type}
                location={store}
            />
        })
    )
}