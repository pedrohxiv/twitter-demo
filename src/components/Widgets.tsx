'use client';

import trendingTopics from '@/data/trendingTopics.json';
import users from '@/data/users.json';
import Image from 'next/image';

export default function Widgets() {
  const formatNumberToText = (number: number): string => {
    if (number < 10000) {
      return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
    } else if (number > 10000) {
      return (
        (number / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 }) +
        ' thousand'
      );
    } else {
      return (number / 1000000).toFixed(0) + ' million';
    }
  };

  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      <div className="py-4 px-2">
        <h1 className="text-xl font-extrabold mb-4 tracking-wide px-2">
          What is happening
        </h1>
        {trendingTopics.map((topic) => (
          <div
            key={topic.tweets}
            className="hover:bg-gray-100 p-2 cursor-pointer transition duration-200 ease-out"
          >
            <div className="flex items-center justify-between -mb-2">
              <h6 className="text-xs text-gray-500/80 font-medium">{topic.category}</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500/80 rounded-full hover:text-twitter hover:bg-twitter/10 transition duration-200 ease-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <h5 className="text-base font-semibold">{topic.description}</h5>
            <h6 className="text-xs text-gray-500/80 font-medium">
              {formatNumberToText(topic.tweets) + ' Tweets'}
            </h6>
          </div>
        ))}
        <p className="hover:bg-gray-100 p-2 cursor-pointer text-twitter text-sm transition duration-200 ease-out">
          Show more
        </p>
      </div>
      <div className="py-4 px-2">
        <h1 className="text-xl font-extrabold mb-4 tracking-wide px-2">Who to follow</h1>
        {users.map((user) => (
          <div
            key={user.username}
            className="flex flex-row items-center justify-between px-2 py-3  cursor-pointer hover:bg-gray-100 transition duration-200 ease-out"
          >
            <div className="flex flex-row items-center w-3/5 text-start">
              <Image
                src={user.profilePicture}
                width={40}
                height={40}
                alt={user.name}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3">
                <h5 className="text-sm font-semibold">{user.name}</h5>
                <h6 className="text-sm text-gray-500/80 font-medium">{user.username}</h6>
              </div>
            </div>
            <button className="text-white bg-black text-sm font-semibold py-2 px-0 lg:px-2 xl:px-4 rounded-3xl hover:bg-neutral-800 transition duration-200 ease-out">
              Follow
            </button>
          </div>
        ))}
        <p className="hover:bg-gray-100 p-2 cursor-pointer text-twitter text-sm transition duration-200 ease-out">
          Show more
        </p>
      </div>
    </div>
  );
}
