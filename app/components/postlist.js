"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('api/posts').then((res) => res.json()).then((data) => {
            console.log(data);
            setPosts(data);
            setLoading(false)
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }, []);

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
            {posts.length === 0 ? (
                <p className="text-gray-600">No posts found.</p>
            ) : (
                posts.map((post) => (
                    <li key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))
            )
            }
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Title</h3>
                    <p className="text-gray-600">Description</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Title</h3>
                    <p className="text-gray-600">Description</p>
                </div>
            </div>
        </div>
    );
}