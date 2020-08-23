import React from 'react'
import BlogItem from '../component/BlogItem';
import { Row } from 'antd';

function Blog() {
    const blogs = [
        {
            title: 'Symbol Tables - Balanced Search Tree',
            date: 'Aug 14 2020',
            imgsrc: '/image/bstBlog.jpeg',
            intro: 'Introduce balanced search trees for a better implementation of symbol tables (2-3 Tree and Red Black Tree)...',
            href: 'http://www.blog-jz.com/detail?id=5f3723842f3c74001735f21e'
        },
        {
            title: 'Priority Queue, Index Priority Queue, and Heap Sort',
            date: 'Aug 2 2020',
            imgsrc: '/image/blog7.jpeg',
            intro: 'Implementation of Priority Queue, Indexed Priority Queue with Binary Heap, and Heap Sort ...',
            href: 'http://www.blog-jz.com/detail?id=5f27405de6ea9c0017706406'
        },
    ];

    return(<div>
        <Row type='flex' justify='center'>
            <div className="moreBlogs">Please visit: <a href='http://www.blog-jz.com'>www.blog-jz.com</a> for more blogs</div>
            {blogs.map((blog,index) => {
                return (
                    <div key={index}>
                        <a href={blog.href} >
                            <BlogItem
                                title = {blog.title}
                                date={blog.date}
                                imgsrc={blog.imgsrc}
                                intro = {blog.intro}
                            />
                        </a>   
                    </div>
                )
            })}
        </Row>
        </div>)
}



export default Blog;