'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPosts } from '../../localStorage'; // Adjust the import path as necessary

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch('/api/posts');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Failed to fetch posts:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        // Data from the API
        const data = await res.json();
        // Data from localStorage
        const localStorageData = getPosts();
        const allPosts = [...data, ...localStorageData].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(allPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //     fetch('/api/posts').then((res) => res.json()).then((data) => {
  //         console.log(data);
  //         setPosts(data);
  //         setLoading(false)
  //     }).catch((err) => {
  //         console.error(err);
  //         setLoading(false);
  //     });
  // }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-white">Posts</h2>
        <Link
          href="/posts/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          New Post
        </Link>
      </div>
      <div className="space-y-6">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-600">No posts found.</p>
        ) : (
          posts.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-2">{post.content}</p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-4">{post.author}</span>
                <span>
                  {post.date && new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {Array.isArray(post.tags) &&
                  post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
