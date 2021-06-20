export default function ProductRating({ value, text }) {
    
    return (
        <div className="flex">
            <div className="flex space-x-1">
                {value >= 1 ? (
                    <img src="/images/icons/full-star.png" className="h-5" />
                ) : value >= 0.5 ? (
                    <img src="/images/icons/half-fill.png" className="h-5" />
                ) : (
                    <img src="/images/icons/empty-star.png" className="h-5" />
                )}
                {value >= 2 ? (
                    <img src="/images/icons/full-star.png" className="h-5" />
                ) : value >= 1.5 ? (
                    <img src="/images/icons/half-fill.png" className="h-5" />
                ) : (
                    <img src="/images/icons/empty-star.png" className="h-5" />
                )}
                {value >= 2 ? (
                    <img src="/images/icons/full-star.png" className="h-5" />
                ) : value >= 2.5 ? (
                    <img src="/images/icons/half-fill.png" className="h-5" />
                ) : (
                    <img src="/images/icons/empty-star.png" className="h-5" />
                )}
                {value >= 3 ? (
                    <img src="/images/icons/full-star.png" className="h-5" />
                ) : value >= 3.5 ? (
                    <img src="/images/icons/half-fill.png" className="h-5" />
                ) : (
                    <img src="/images/icons/empty-star.png" className="h-5" />
                )}
                {value >= 5 ? (
                    <img src="/images/icons/full-star.png" className="h-5" />
                ) : value >= 4.5 ? (
                    <img src="/images/icons/half-fill.png" className="h-5" />
                ) : (
                    <img src="/images/icons/empty-star.png" className="h-5" />
                )}
            </div>
            <div className="ml-3 text-red-500">{text && text}</div>
        </div>
    )
}
