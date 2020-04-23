import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"

export default () => (
    <>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

    </>
)