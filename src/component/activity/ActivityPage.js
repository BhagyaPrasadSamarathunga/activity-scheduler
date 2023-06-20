import { useParams, Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const ActivityPage = ({ activities, handleEdit, handleDelete }) => {
    const { id } = useParams();
    const activity = activities.find(activity => (activity.id).toString() === id);

    const DetailRow = ({type, value}) => {
        return (
            <div className="flex flex-row flex-1 ">
                <h2 className="font-extrabold">{type}:</h2>
                <h2 className="ml-4">{value}</h2>
            </div>
        )
    }

    return (
        <main className="flex bg-amber-300 justify-center">
            <article className="bg-red-300 p-5">
                {activity &&
                    <>
                    <DetailRow type={'Activity Type'} value={activity.activityType}/>
                    <DetailRow type={'Date'} value={activity.datetime}/>
                    <DetailRow type={'Performer'} value={activity.taskPerformer}/>
                    <DetailRow type={'Pitch'} value={activity.pitch}/>
                        <Link to={`/editActivity/${activity.id}`}>
                            <button className="mr-6"><FaEdit/></button></Link>                        
                            <button onClick={() => handleDelete(activity.id)}>
                                <FaTrashAlt/>
                            </button>
                    </>
                }
                {!activity &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default ActivityPage