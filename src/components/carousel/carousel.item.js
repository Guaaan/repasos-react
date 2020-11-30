import PropTypes from 'prop-types';

const CarouselItemComponent = ({ image, active }) => {
    return (
        <div className={`carousel-item ${active}`}>
            <img
                src={image.url}
                className={image.className}
                alt={image.alt}
            />
        </div>
    )
}

CarouselItemComponent.propTypes = {
    image: PropTypes.object.isRequired,
    active: PropTypes.string.isRequired
}

export default CarouselItemComponent;