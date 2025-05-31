export interface BlogPost {
    id: number;
    title: string;
    content: string;
    date: string;
    autor: string;
    tags: string[];
}

const STORAGE_KEY = 'blog_Posts';

export function getPosts(): BlogPost[] {
    if (typeof window === 'undefined') return [];

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

export function savePosts(post: BlogPost[]): void {
    if (typeof window === 'undefined') return;

    try {
        const storedPosts = getPosts();
        const updatedPost = [post, ...storedPosts];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPost));
        console.log('Posts saved to localStorage:', updatedPost);
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
}

// export function updatePosts(updatedPosts: BlogPost[]): void {
//     if (typeof window === 'undefined') return;

//     try {
//         const storedPosts = getPosts();
//     } catch (error) {
//         console.error('Error writing localStorage:', error);
//     }
// }