import React, { useState, useEffect } from 'react';

const stories = [
  {
    id: 1,
    title: 'Show HN: React Email v2.0 - The framework for building emails in React', 
    url: 'https://react.email',
    points: 100,
    author: 'someone', 
    created_at: '2 hours ago',
    num_comments: 30
  },
  {
    id: 2,
    title: 'A practical guide to fixing memory leaks in Node.js', 
    url: 'https://blog.appsignal.com',
    points: 80,
    author: 'another', 
    created_at: '3 hours ago',
    num_comments: 15
  },
  {
    id: 3,
    title: 'Show HN: I built a tool to track your SaaS revenue in real-time', 
    url: 'https://saas-tracker.com',
    points: 120,
    author: 'builder', 
    created_at: '1 hour ago',
    num_comments: 45
  },
];

const comments = {
  1: [
    { id: 1, author: 'user1', text: 'Great work!' },
    { id: 2, author: 'user2', text: 'I have been waiting for this.' },
  ],
  2: [
    { id: 3, author: 'commenter1', text: 'Very informative.' },
  ],
  3: [
    { id: 4, author: 'hacker', text: 'Interesting project.' },
    { id: 5, author: 'coder', text: 'How does it handle edge cases?' },
  ],
};

const NewsItem: React.FC<{ story: (typeof stories)[0] }> = ({ story }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-2">
      <div className="flex items-start">
        <div className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div>
          <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-indigo-700 hover:underline">
            {story.title}
          </a>
          <div className="text-gray-500 text-sm">
            {story.points} points by {story.author} {story.created_at} | <button onClick={() => setShowComments(!showComments)} className="text-indigo-600 hover:underline">{story.num_comments} comments</button>
          </div>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 ml-6">
          {comments[story.id]?.map(comment => (
            <div key={comment.id} className="mb-2 p-2 bg-gray-100 rounded-md">
              <div className="text-sm font-semibold">{comment.author}</div>
              <div className="text-sm">{comment.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const HackerNewsClone: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-orange-500 p-4 rounded-md shadow-md mb-4">
        <h1 className="text-white text-xl font-bold">Hacker News</h1>
      </header>
      <div className="max-w-lg mx-auto">
        {stories.map(story => (
          <NewsItem key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default HackerNewsClone;
