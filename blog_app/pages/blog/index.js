import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { Row, Col, Pagination } from 'antd'
import Header from '@/components/Header'
import '@/public/styles/pages/blog.less'
import api from "@/network/blog";

export default function Blog(params) {
    const potsContent = ['vue', 'ts', 'react']

    const [posts, setPosts] = useState(params[0])
    // console.log(posts)
    return (
        <div className="container">
            <Head>
                <title>Blog</title>
                
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Header></Header>

            <section className="posts-section"></section>
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