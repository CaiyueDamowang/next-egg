import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>React SSR App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <main>
        <h3 className="title">
          Blog systerm with Next & React by SSR
        </h3>
      </main>

      <footer>
        <a href = 'http://CaiyueDamowang.github.io'>view my github</a>
      </footer>
    </div>
  )
}
