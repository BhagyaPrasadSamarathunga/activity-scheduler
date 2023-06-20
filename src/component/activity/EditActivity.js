import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker';

const EditActivity = ({
    activities, handleEdit, editActivityType,setEditActivityType, editActivityDateTime,setEditActivityDateTime,
    editActivityTaskPerformer,setEditActivityTaskPerformer,editActivitypitch,setEditActivitypitch
}) => {
    const { id } = useParams();
    const activity = activities.find(activity => (activity.id).toString() === id);

    useEffect(() => {
        if (activity) {
            setEditActivityType(activity.activityType);
            setEditActivityDateTime(activity.datetime);
            setEditActivityTaskPerformer(activity.taskPerformer);
            setEditActivitypitch(activity.pitch);
        }
    }, [activity, setEditActivityType, setEditActivityDateTime, setEditActivityTaskPerformer, setEditActivitypitch])

    return (
        <main className="bg-amber-300">
            {editActivityType &&
                <>
                    <h2 className="font-extrabold">Edit Activity</h2>
                    <form className="bg-sky-50 m-6 border border-sky-300 p-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col">
                        <label className="mb-4" htmlFor="postTitle">Activity Type:</label>
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            id="activityType"
                            value={editActivityType}
                            onChange={(e) => setEditActivityType(e.target.value)}
                        >
                            <option>Mowing</option>
                            <option>Fertilisation</option>
                            <option>Irrigation</option>
                            <option>Aeration</option>    
                        </select>
                        </div>
                        <div className="flex flex-col">
                        <label className="my-4" htmlFor="postBody">Activity DateTime:</label>
                        <div>
                            <DateTimePicker onChange={setEditActivityDateTime} value={editActivityDateTime} />
                        </div>
                        </div>
                        <div className="flex flex-col">
                        <label className="my-4" htmlFor="postTitle">Activity Task Performer:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editActivityTaskPerformer}
                            onChange={(e) => setEditActivityTaskPerformer(e.target.value)}
                        />
                        </div>
                        <div className="flex flex-col">
                        <label className="my-4" htmlFor="postTitle">Activity Type:</label>
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            id="activityType"
                            value={editActivitypitch}
                            onChange={(e) => setEditActivitypitch(e.target.value)}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        </div>
                        <button className="bg-sky-600 px-4 py-2 rounded-lg my-4" type="submit" onClick={() => handleEdit(activity.id)}>Submit</button>
                    </form>
                </>
            }
            {!editActivityType &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditActivity;