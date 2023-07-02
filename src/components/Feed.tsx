import Tweet from './Tweet';
import TweetBox from './TweetBox';
import tweets from '@/data/tweets.json';

export default function Feed() {
  return (
    <div className="col-span-8 md:col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer text-twitter mr-5 mt-5 transition duration-500 ease-out hover:rotate-180 active:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
      <div>
        <TweetBox />
      </div>
      <div className="max-h-screen overflow-y-scroll scrollbar-hide">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}
