import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({activity}) => {

    const DetailRow = ({type, value}) => {
        return (
            <div className="flex flex-row flex-1 ">
                <h2 className="font-extrabold">{type}:</h2>
                <h2 className="ml-4">{value}</h2>
            </div>
        )
    }
    return(
        <article className='bg-lime-400 m-2 rounded-lg px-4'>
            <Link to={`/activity/${activity.id}`}>
                <DetailRow type={'Activity Type'} value={activity.activityType}/>
                <DetailRow type={'Date'} value={activity.datetime}/>
                <DetailRow type={'Performer'} value={activity.taskPerformer}/>
                <DetailRow type={'Pitch'} value={activity.pitch}/>
            </Link>
        </article>
    )
}

export default Post;