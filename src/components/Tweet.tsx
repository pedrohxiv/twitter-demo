import { format } from 'date-fns';
import Image from 'next/image';

type Tweet = {
  profilePicture: string;
  username: string;
  name: string;
  createdAt: string;
  text: string;
  image: string;
};

export default function Tweet({ tweet }: { tweet: Tweet }) {
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <Image
          src={tweet.profilePicture}
          height={40}
          width={40}
          alt={tweet.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.name}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">{tweet.username} - </p>
            <p className="text-sm text-gray-500">
              {format(new Date(tweet.createdAt), 'MM/dd/yy')}
            </p>
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <Image
              src={tweet.image}
              height={60}
              width={480}
              alt={tweet.text}
              className="m-5 ml-0 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
          <div className="flex justify-around max-w-[480px]">
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <p>{Math.floor(Math.random() * (100 - 1 + 1)) + 1}</p>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p>{Math.floor(Math.random() * (10000 - 100 + 1)) + 100}</p>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
