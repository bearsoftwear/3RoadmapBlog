'use client';

import Nav from '../../components/nav';
import { useState } from 'react';
import { savePosts } from '../../../localStorage';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    author: '',
    tags: [],
  });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
    if (e.key === 'Backspace' && !tagInput && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (idx) => {
    setTags(tags.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        id: Date.now(),
        title: title,
        content: content,
        date: date,
        author: author,
        tags: tags,
      };

      savePosts(postData);
      setTitle('');
      setContent('');
      setDate('');
      setAuthor('');
      setTags([]);
      setTagInput('');

      setTimeout(() => {
        router.push('/posts');
      }, 1000);
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post. Please try again.');
    }
    // TODO: send data to API
    // alert(JSON.stringify({ title, content, date, author, tags }, null, 2));
  };

  return (
    <>
      <Nav />
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Create Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Content
          </label>
          <textarea
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={5}
            placeholder="Write your post content here..."
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date</label>
          <input
            type="date"
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Author</label>
          <input
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder="Author name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold flex items-center"
              >
                #{tag}
                <button
                  type="button"
                  className="ml-1 text-blue-500 hover:text-red-500"
                  onClick={() => removeTag(idx)}
                  aria-label="Remove tag"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Type a tag and press Enter"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </>
  );
}
