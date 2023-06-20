import React from 'react';
import Post from './Post';

const Feed = ({activities}) => {

    return(
        <>
            {activities.map(activity=>(
                <Post key= {activity.id} activity={activity}/>
            ))}
        </>
    )
}

export default Feed;