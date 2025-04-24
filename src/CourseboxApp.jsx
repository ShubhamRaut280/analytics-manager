function CourseboxApp() {
  const courses = [
    {
      id: 1,
      title: "Ultimate AWS Certified Solutions Architect Associate 2025",
      instructor: "Stephane Maarek | AWS Certified Cloud…",
      rating: 4.7,
      ratingCount: 255463,
      price: "₹639",
      originalPrice: "₹3,849",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/1b902401-9496-4f55-f67f-5c9624057d03.jpg",
      alt: "Smiling man in white shirt with AWS Certified Solutions Architect Associate 2025 badge on orange background",
      premium: true,
      bestseller: true,
      buttonText: "Purchase course",
      buttonColor: "bg-purple-800",
      free: false,
    },
    {
      id: 2,
      title: "Learn Ethical Hacking From Scratch 2024",
      instructor: "Zaid Sabih, z Security",
      rating: 4.6,
      ratingCount: 130938,
      price: "₹759",
      originalPrice: "₹4,559",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/9e420f10-5a23-41a0-2f86-46aa17bce0ef.jpg",
      alt: "Man in white t-shirt with blue background showing cloud with red lock and security icons",
      premium: true,
      bestseller: true,
      buttonText: "Purchase course",
      buttonColor: "bg-purple-800",
      free: false,
    },
    {
      id: 3,
      title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      instructor: "Stephane Maarek | AWS Certified Cloud…",
      rating: 4.7,
      ratingCount: 246342,
      price: "Free",
      originalPrice: null,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/d191c6e0-aa55-4659-c0a2-015921275ea1.jpg",
      alt: "Smiling man in white shirt with AWS Certified Cloud Practitioner CLF-C02 2025 badge on orange background",
      premium: true,
      bestseller: true,
      buttonText: "Enroll now",
      buttonColor: "bg-teal-600",
      free: true,
    },
    {
      id: 4,
      title: "Ultimate AWS Certified Developer Associate 2025 DVA-C02",
      instructor: "Stephane Maarek | AWS Certified Cloud…",
      rating: 4.7,
      ratingCount: 111458,
      price: "Free",
      originalPrice: null,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/5b620e7a-6ade-4654-45bf-2c52def2881d.jpg",
      alt: "Smiling man in white shirt with AWS Certified Developer Associate 2025 DVA-C02 badge on orange background",
      premium: true,
      bestseller: true,
      buttonText: "Enroll now",
      buttonColor: "bg-teal-600",
      free: true,
    },
  ];

  const handlePurchaseCourse = async (courseId) => { 
    try {
      const response = await fetch('http://localhost:8080/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: courseId,
          eventType: 'purchase'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Event created:', data);
      alert("Event created successfully!");
      // Handle success here
    } catch (error) {
      console.error('Error sending event:', error);
      // Handle error here
    }
 
  };

  const handleEnrollCourse = async(courseId) => {try {
    const response = await fetch('http://localhost:8080/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: courseId,
        eventType: 'enroll'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Event created:', data);
    alert("Event created successfully!");
    // Handle success here
  } catch (error) {
    console.error('Error sending event:', error);
    // Handle error here
  }

  };

  return (
    <>
      <header className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <a className="flex items-center" href="#">
              <span className="ml-1 font-extrabold text-2xl tracking-tight select-none">
                CourseBox
              </span>
            </a>
            <nav className="hidden sm:flex space-x-4 text-sm font-normal text-gray-700">
              <a className="hover:underline" href="#">
                Explore
              </a>
            </nav>
          </div>
          <form
            aria-label="Search for anything"
            className="flex-1 max-w-xl mx-4 hidden sm:block"
            role="search"
          >
            <label className="sr-only" htmlFor="search-input">
              Search for anything
            </label>
            <input
              className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
              id="search-input"
              placeholder="Search for anything"
              type="search"
            />
          </form>
          <nav className="hidden sm:flex items-center space-x-6 text-sm font-normal text-gray-700">
            <a className="hover:underline" href="#">
              My learning
            </a>
            <button
              aria-label="Wishlist"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <i className="far fa-heart text-lg"></i>
            </button>
            <button
              aria-label="Cart"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <i className="fas fa-shopping-cart text-lg"></i>
            </button>
            <button
              aria-label="Notifications"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <i className="far fa-bell text-lg"></i>
            </button>
            <button
              aria-label="User menu"
              className="relative w-8 h-8 rounded-full bg-black text-white font-semibold flex items-center justify-center text-sm focus:outline-none"
            >
              SR
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-purple-600 rounded-full ring-2 ring-white"></span>
            </button>
          </nav>
        </div>
        <nav
          aria-label="IT & Software categories"
          className="max-w-[1200px] mx-auto flex space-x-6 text-sm font-normal text-gray-800 border-t border-b border-gray-200 shadow-sm px-4"
        >
          <a
            aria-current="page"
            className="flex items-center space-x-2 py-2 px-3 font-semibold text-gray-900 border border-gray-300 rounded-r-md bg-white relative"
            href="#"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            IT &amp; Software
          </a>
          <a
            className="py-2 px-3 hover:text-purple-700 hover:underline whitespace-nowrap"
            href="#"
          >
            IT Certifications
          </a>
          <a
            className="py-2 px-3 hover:text-purple-700 hover:underline whitespace-nowrap"
            href="#"
          >
            Network &amp; Security
          </a>
          <a
            className="py-2 px-3 hover:text-purple-700 hover:underline whitespace-nowrap"
            href="#"
          >
            Hardware
          </a>
          <a
            className="py-2 px-3 hover:text-purple-700 hover:underline whitespace-nowrap"
            href="#"
          >
            Operating Systems &amp; Servers
          </a>
          <a
            className="py-2 px-3 hover:text-purple-700 hover:underline whitespace-nowrap"
            href="#"
          >
            Other IT &amp; Software
          </a>
        </nav>
      </header>
      <main className="max-w-[1200px] mx-auto px-4 mt-10 mb-20">
        <h1 className="text-3xl font-extrabold mb-6">IT &amp; Software Courses</h1>
        <section aria-label="Courses to get you started" className="max-w-7xl">
          <h2 className="text-xl font-extrabold mb-1">Courses to get you started</h2>
          <p className="text-gray-600 mb-4 text-sm max-w-md">
            Explore courses from experienced, real-world experts.
          </p>
          <nav
            aria-label="Course filters"
            className="flex space-x-6 border-b border-gray-300 mb-6 text-sm font-semibold text-gray-900"
          >
            <button
              aria-current="true"
              className="border-b-2 border-black pb-2 -mb-[2px] focus:outline-none"
            >
              Most popular
            </button>
            <button className="hover:text-gray-900 focus:outline-none">New</button>
            <button className="hover:text-gray-900 focus:outline-none">Trending</button>
          </nav>
          <div
            aria-label="Most popular courses"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            role="list"
          >
            {courses.map((course) => {
              const fullStars = Math.floor(course.rating);
              const halfStar = course.rating % 1 >= 0.5;
              const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
              return (
                <article key={course.id} className="group flex flex-col" role="listitem">
                  <img
                    src={course.imgSrc}
                    alt={course.alt}
                    className="w-full h-48 object-cover rounded-sm"
                    height="200"
                    width="400"
                  />
                  <h3 className="mt-2 font-semibold text-sm leading-tight text-gray-900 group-hover:underline">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 truncate max-w-[400px]">
                    {course.instructor}
                  </p>
                  <div className="flex items-center space-x-1 mt-1 text-xs">
                    <span className="font-semibold text-gray-900">
                      {course.rating.toFixed(1)}
                    </span>
                    {[...Array(fullStars)].map((_, i) => (
                      <i key={"full" + i} className="fas fa-star text-yellow-600"></i>
                    ))}
                    {halfStar && <i className="fas fa-star-half-alt text-yellow-600"></i>}
                    {[...Array(emptyStars)].map((_, i) => (
                      <i key={"empty" + i} className="far fa-star text-yellow-600"></i>
                    ))}
                    <span className="text-gray-500 ml-1">
                      ({course.ratingCount.toLocaleString()})
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-900">
                    {course.free ? (
                      "Free"
                    ) : (
                      <>
                        {course.price}
                        {course.originalPrice && (
                          <span className="line-through text-gray-400 font-normal ml-2">
                            {course.originalPrice}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <div className="mt-2 flex space-x-2 mb-4">
                    {course.premium && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-purple-800 text-white">
                        <i className="fas fa-certificate mr-1 text-[10px]"></i> Premium
                      </span>
                    )}
                    {course.bestseller && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-teal-300 text-teal-900">
                        Bestseller
                      </span>
                    )}
                  </div>
                  <button
                    className={`mt-auto text-white text-xs font-semibold rounded px-3 py-1 w-max transform transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 focus:outline-none cursor-pointer ${course.buttonColor}`}
                    type="button"
                    onClick={() =>
                      course.free
                        ? handleEnrollCourse(course.id)
                        : handlePurchaseCourse(course.id)
                    }
                  >
                    {course.buttonText}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default CourseboxApp;
