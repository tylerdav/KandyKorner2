import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
// import EmployeeList from "./employee/EmployeeList"

export default () => (
    <>
        <ProductProvider>
            <LocationProvider>
                <ProductTypeProvider>
                    <EmployeeProvider>
                        <h1>Locations</h1>
                        <LocationList />
                        <h1>Products</h1>
                        <ProductList />
                        <h1>Employees</h1>
                        {/* <EmployeeList /> */}
                    </EmployeeProvider>
                </ProductTypeProvider>
            </LocationProvider>
        </ProductProvider>
    </>
)