import React from "react"

export default ({ location }) => (
    <section className="location">
        <address className="location__address">{location.address}</address>
        <div className="location__sqft">{location.sqft} sqft</div>
        <div className="location__handicap">Handicap Accessible: {location.handicapAccessible === true ? "Yes" : "No"}</div>
    </section>
)