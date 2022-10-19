import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, setPosts] = useState([])
    const handleClick = (color) => {
        setPosts([...posts, color])
    }

    return (
        <div>
            <Menu handleClick = {handleClick}></Menu>


            {posts.map((post) => {
              return <Block color = {post}  />
          })}            
        </div>
    );
}

export default Feed;