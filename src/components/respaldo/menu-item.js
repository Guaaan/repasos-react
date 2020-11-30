const MenuItem = ({ link: { url, label, active } }) => {
    return (
        <li className="nav-item">
            <a
                className={"nav-link" + (active === true ? " active" : "")}
                href={url}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        </li>
    )
}

export default MenuItem;