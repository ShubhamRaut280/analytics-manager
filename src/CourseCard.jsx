function CourseCard({
    title,
    instructor,
    rating,
    ratingCount,
    price,
    originalPrice,
    imgSrc,
    alt,
    premium,
    bestseller,
    buttonText,
    buttonColor,
    free,
  }) {
    return (
      <article className="group flex flex-col" role="listitem">
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-48 object-cover rounded-sm"
          height="200"
          width="400"
        />
        <h3 className="mt-2 font-semibold text-sm leading-tight text-gray-900 group-hover:underline">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mt-1 truncate max-w-[400px]">{instructor}</p>
        <div className="flex items-center space-x-1 mt-1 text-xs">
          <StarRating rating={rating} />
          <span className="text-gray-500 ml-1">({ratingCount.toLocaleString()})</span>
        </div>
        <div className="mt-1 text-sm font-semibold text-gray-900">
          {free ? (
            "Free"
          ) : (
            <>
              {price}
              {originalPrice && (
                <span className="line-through text-gray-400 font-normal ml-2">
                  {originalPrice}
                </span>
              )}
            </>
          )}
        </div>
        <div className="mt-2 flex space-x-2 mb-4">
          {premium && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-purple-800 text-white">
              <i className="fas fa-certificate mr-1 text-[10px]"></i> Premium
            </span>
          )}
          {bestseller && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-teal-300 text-teal-900">
              Bestseller
            </span>
          )}
        </div>
        <button
          className={`mt-auto text-white text-xs font-semibold rounded px-3 py-1 w-max hover:opacity-90 focus:outline-none ${buttonColor}`}
          type="button"
        >
          {buttonText}
        </button>
      </article>
    );
  }

export default CourseCard;