const MenuLink = ({ children, url, active }) => {
    return (
        <a
            className={"nav-link" + (active === true ? " active" : "")}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

export default MenuLink;