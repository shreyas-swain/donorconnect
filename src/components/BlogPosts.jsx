import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ image, category, title, date, author, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0">
          <span className="bg-donation-orange text-white text-xs font-medium px-3 py-1">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-3">{title}</h3>
        <div className="flex text-sm text-gray-500 mb-4">
          <span className="mr-4">• {date}</span>
          <span>• by {author}</span>
        </div>
        <Link to={link} className="text-donation-orange hover:underline font-medium">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: '/public/lovable-uploads/blog-1.jpeg',
      category: 'CHILD CARE',
      title: 'Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit.',
      date: '24 Feb, 2022',
      author: 'admin',
      link: '/blog/1'
    },
    {
      id: 2,
      image: '/public/lovable-uploads/blog-2.jpeg',
      category: 'CHILD CARE',
      title: 'Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit.',
      date: '24 Feb, 2022',
      author: 'admin',
      link: '/blog/2'
    },
    {
      id: 3,
      image: '/public/lovable-uploads/blog-3.jpeg',
      category: 'CHILD CARE',
      title: 'Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit.',
      date: '24 Feb, 2022',
      author: 'admin',
      link: '/blog/3'
    }
  ];

  return (
    <section className="py-16 bg-light-bg">
      <div className="container-custom">
        <h3 className="text-donation-orange text-lg text-center mb-2">Our Blog Posts</h3>
        <h2 className="text-3xl font-bold text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPost 
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
