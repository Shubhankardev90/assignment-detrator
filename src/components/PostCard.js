import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

import React, { useState } from 'react'
import { Box } from '@mui/system'

const PostCard = ({post, height}) => {
    const [tagColors, setTagColors] = useState([ "secondary", "success", "error"])
  return (
    <Card style={{height: height ?? 'auto'}}>
        <CardHeader
            title={post.title}
            titleTypographyProps={{fontSize:"1.2rem"}}
        />
        <CardContent>
            <Box mb={1}>
                {
                    post.tags.map((tag, key)=>(
                        <Button key={key} color={tagColors[key%3]} variant="outlined" size="small" style={{margin:"0 5px 5px 0"}}>{tag}</Button>
                    ))
                }
            </Box>
            <Box display="flex" alignItems="center" fontWeight="600" fontSize="small" columnGap="5px" mb={1}>
                <FavoriteIcon style={{color:"red"}}/>
                {post.reactions} {post.reactions>1 ? 'likes' : 'like'}
            </Box>
            <Typography variant="body2" color="text.secondary" style={{lineClamp:7, display:"-webkit-box", boxOrient:"vertical"}}>
                {post.body}
            </Typography>
      </CardContent>
    </Card>
  )
}

export default PostCard


