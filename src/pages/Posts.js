import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Box, Grid} from '@mui/material';
import PostCard from '../components/PostCard'
const Posts = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async()=>{
        const {data} = await axios.get('https://dummyjson.com/posts')
        data && setPosts(data.posts)
    }

    useEffect(() => {
        getPosts()
    },[])
    
  return (
    <>
        <Box width="100vw" bgcolor="#001E3C" py="15px" px="10px" position="relative">
            <h2 style={{margin:0, color:"#f2f202"}}>Posts</h2>
        </Box>
        <Grid container spacing="20" p="20px" bgcolor="#7c7c7c20" minHeight="calc(100vh - 62px)" flexGrow={1}>
            {
                posts && posts.map((post,key)=> (
                    <Grid item xs={4} key={key}>
                        <PostCard post={post} height={"100%"} />
                    </Grid>
                ))
            }
        </Grid>
      
    </>
  )
}

export default Posts