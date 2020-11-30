import { useState } from "react";
import CarouselItemComponent from "./carousel.item";

const CarouselContainerComponent = props => {
    return (
        <div className="carousel-inner">
            {
                props.gallery.length > 0 &&
                props.gallery.map((image, index) => {
                    let active = image.active === true ? "active" : "";
                    return (
                        <CarouselItemComponent key={index} image={image} active={active} />
                    )
                })
            }
        </div>
    )
}

export default CarouselContainerComponent;