import React from 'react'
import BlogItem from '../component/BlogItem';
import { Row } from 'antd';

function Blog() {
    return(<div>
        <Row type='flex' justify='center'>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </Row>
        </div>)
}

export default Blog;