import React from "react"
import "./Product.css"

export default ({ product, location, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__location">{location.address}</address>
        <div className="product__productType">{productType.type}</div>
    </section>
)   