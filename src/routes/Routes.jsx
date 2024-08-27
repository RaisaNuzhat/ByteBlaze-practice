
import { createBrowserRouter } from 'react-router-dom'

import Bookmarks from '../pages/Bookmarks.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Blogs from '../pages/Blogs.jsx'
 import Blog from '../pages/Blog.jsx';
import Content from '../components/Content.jsx';
import Author from '../components/Author.jsx';
 export  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/blogs',
          element:<Blogs/>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path:'/blog/:id',
          element:<Blog/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        
        },
        {
          path:'/bookmarks',
          element:<Bookmarks/>
        }
      ]
  
      
    },
    
  
  ]);