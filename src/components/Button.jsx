const Button = ({ text, callback }) => {
    return (
        <button onClick={callback} className="px-2 text-neutral-500 border-neutral border-2">
            {text}
        </button>
    )
}

export { Button }
