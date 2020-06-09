import React, { Fragment } from 'react';

export default function PostsList(params) {
    const { dataList } =  params

    return (
        <Fragment>
            <div className="posts-list">
                {dataList.map(post => (
                    <li className="post-item">
                        <a>{ post.title }</a>
                        <time>{post.content}</time>
                    </li>
                ))}
            </div>
        </Fragment>
    )    
};
