import React from 'react';
import Header from './components/header'
import Menu from './components/menu'
import Content from './components/content'
import Control from './components/control'
import Footer from './components/footer'

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Content />
      <Control />
      <Footer />
    </div>
  );
}
