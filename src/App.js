import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
const getlocalItem = ()=>{
  let theme ='light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}
function App() {
  const [articles,setArticles] = useState([])
  const [theme,setTheme] = useState(getlocalItem())
  useState(()=>{
    setArticles(data)
  },[])
  useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme',theme)
  },[theme])
  const handleClick=()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }
    else {
      setTheme('light-theme')
    }
  }
  return <main>
    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button className="btn" onClick={handleClick}>toggle</button>
      </div>
    </nav>
    <section className="articles">
      {
        articles.map((article,i)=>{
          return <Article key={i} {...article} />
        })
      }
    </section>
  </main>
}

export default App
