import React from 'react';

const ReviewsCard = ({ review }) => {
  // Destructure review properly
  const { userName, review: testimonial, user_photoURL, date, ratings } = review;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 flex justify-around">
          <div className="w-px bg-pink-200"></div>
          <div className="w-px bg-pink-200"></div>
          <div className="w-px bg-pink-200"></div>
          <div className="w-px bg-pink-200"></div>
          <div className="w-px bg-pink-200"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Quotation Mark */}
        <div className="text-gray-400 text-6xl font-serif leading-none mb-4 -mt-2">
          &#8220;
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
          {testimonial}
        </p>

        {/* Separator */}
        <div className="border-t border-dashed border-gray-300 w-full mb-6"></div>

        {/* Author Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
            {user_photoURL ? (
              <img
                src={user_photoURL}
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 font-bold">{userName?.charAt(0)}</span>
            )}
          </div>

          <div>
            <p className="text-gray-900 font-semibold text-lg">{userName}</p>
            {/* Optional: show date or rating */}
            <p className="text-gray-500 text-sm">
              {new Date(date).toLocaleDateString()} • {ratings}⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
