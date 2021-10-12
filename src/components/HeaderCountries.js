import React from 'react'

const HeaderCountries = ({setValueAndDirection, direction}) => {
    return (
        <div className="header_countries">
            <div className="btn_wrapper">
                <button onClick={() => setValueAndDirection("common")} className="header_name">Name <i className={direction === "desc" ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i> </button>
            </div>
            <div className="btn_wrapper">
                <button onClick={() => setValueAndDirection("population")} className="header_population">Population <i className={direction === "desc" ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></button>
            </div>
            <div className="btn_wrapper">
                <button onClick={() => setValueAndDirection("area")} className="header_area">Area(km<sup>2</sup>) <i className={direction === "desc" ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></button>
            </div>
        </div>
    )
}

export default HeaderCountries;
