function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex items-center space-x-1 text-yellow-600 text-xs">
            <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
            {[...Array(fullStars)].map((_, i) => (
                <i key={"full" + i} className="fas fa-star"></i>
            ))}
            {halfStar && <i className="fas fa-star-half-alt"></i>}
            {[...Array(emptyStars)].map((_, i) => (
                <i key={"empty" + i} className="far fa-star"></i>
            ))}
        </div>
    );
}

export default StarRating;