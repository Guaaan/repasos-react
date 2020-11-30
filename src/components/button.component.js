const ButtonComponent = ({ action, className, children }) => {
    return (
        <button
            type="button"
            class={`btn ${className}`}
            onClick={action}
        >
            {children}
        </button>
    )
}

export default ButtonComponent;