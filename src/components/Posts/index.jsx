
import React from 'react';
import {PostCard} from  '../../components/PostCard';
export const Posts = ({posts}) => {
return (
        <div className="posts">
        {posts.map(post =>(
          <PostCard key={post.id}
          post={post}
          />
          
        ))}
      </div>
    )
}