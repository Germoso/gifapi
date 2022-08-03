import React from "react"

const Gif = ({ url, title, id }) => {
    return (
        <div className="relative max-w-full h-min mb-3 border-slate-300 border-2">
            <img key={id} src={url} alt={title} className="w-full" />
            <span className="absolute bottom-0 left-0 bg-[#0007]">{title}</span>
        </div>
    )
}

export { Gif }
