import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const posts = await getCollection('blog');
    return rss({
        title: 'Astro Learner | Blog RSS Feed',
        description: 'My journey learning Astro',
        site: 'https://example.com',
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            link: `https://example.com/blog/${post.slug}`,
        })),
    });
}