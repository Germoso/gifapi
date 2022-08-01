const Button = ({ text, callback }) => {
    return (
        <button onClick={callback} className="px-2 bg-slate-200 text-black">
            {text}
        </button>
    )
}

export { Button }
