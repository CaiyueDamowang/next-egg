import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import Header from '@/components/Header'
import PostsList from '@/components/PostsList'
import Content from '@/components/Content'

import api from "@/network/blog";
import '@/public/styles/pages/blog.less'

export default function Blog(params) {
    const potsContent = [
        { title: 'vue', route: 'vue'},
        { title: 'react', route: 'react'},
        { title: 'Ts', route: 'typescript'},
        { title: 'V8', route: 'V8'},
        { title: 'Js', route: 'javascript'},
        
    ]
    const [posts, setPosts] = useState(params[0])
    // console.log(posts)
    return (
        <div className="container">
            <Head>
                <title>Blog</title>
                
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Header></Header>

            <section className="posts-section">
                    {/* 目录控件 */}
                <div className="posts-list-wrap">
                    <Content dataList={potsContent}></Content>
                    <PostsList dataList={posts}></PostsList>
                </div>
            </section>
            <footer>
                <a href = 'http://CaiyueDamowang.github.io'>view my github</a>
            </footer>
        </div>
    )
};
Blog.getInitialProps = async(req) => {
    const fetchList = new Promise((resolve, reject) => {
        api.getPostsList()
            .then((res) => {
                resolve(res.data)
            })
    })
    return await fetchList
}