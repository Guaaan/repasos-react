import CarouselContainerComponent from "./carousel.container";
import CarouselControlsComponent from "./carousel.controls";

const CarouselComponent = props => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <CarouselContainerComponent gallery={props.gallery} />
            <CarouselControlsComponent />
        </div>
    )
}

export default CarouselComponent;