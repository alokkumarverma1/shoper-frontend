
import React from "react";

function ReviewCard({
  name,
  review,
  avatarUrl,
}) {
  return (
    <div className="w-[220px] shrink-0 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">

      {/* Profile and Name */}
      <div className="mb-3 flex items-center gap-2">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
            {name?.charAt(0).toUpperCase()}
          </div>
        )}

        <h3 className="truncate text-sm font-semibold text-gray-800">
          {name}
        </h3>
      </div>

      {/* Review Text */}
      <p className="line-clamp-3 text-xs leading-5 text-gray-500">
        {review}
      </p>

    </div>
  );
}

export default ReviewCard;
