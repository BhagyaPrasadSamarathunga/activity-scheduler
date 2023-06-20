import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const NewActivity = ({
    handleSubmit, activityType, setActivityType, activityDateTime, setActivityDateTime, activityTaskPerformer,
    setActivityTaskPerformer, activitypitch, setActivityPitch
}) => {

    return(
        <main className="bg-amber-300">
            <h2 className="font-extrabold">Add New Activity</h2>
            <form className="bg-sky-50 m-6 border border-sky-300" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                <label className="mb-4" htmlFor="postTitle">Activity Type:</label>
                <select className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    id="activityType"
                    value={activityType}
                    onChange={(e) => setActivityType(e.target.value)}
                >
                    <option>Mowing</option>
                    <option>Fertilisation</option>
                    <option>Irrigation</option>
                    <option>Aeration</option>    
                </select>
                </div>
                <div className="flex flex-col">
                <label className="my-4"  htmlFor="postBody">Activity DateTime:</label>
                <div className='w-1/5 h-1/5 bg-sky-300'>
                    <DateTimePicker dayPlaceholder="dd" monthPlaceholder="mm" yearPlaceholder="yyyy"  minutePlaceholder="mm" hourPlaceholder="hh" onChange={setActivityDateTime} value={activityDateTime} />
                </div>
                </div>
                <div className="flex flex-col">
                <label className="my-4"  htmlFor="postTitle">Activity Task Performer:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={activityTaskPerformer}
                    onChange={(e) => setActivityTaskPerformer(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label className="my-4"  htmlFor="postTitle">Activity Type:</label>
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    id="activityType"
                    value={activitypitch}
                    onChange={(e) => setActivityPitch(e.target.value)}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
                <button className="bg-sky-600 px-4 py-2 rounded-lg my-4" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewActivity;