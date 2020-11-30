import MenuItem from "./menu-item";

const Menu = ({ links }) => {
    return (
        <ul className="nav justify-content-center">
            {
                links.length > 0 &&
                links.map((link, index) => {
                    return <MenuItem key={index} link={link} />;
                })
            }
        </ul>
    )
}

export default Menu;