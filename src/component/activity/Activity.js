
import { Link } from "react-router-dom";
import Feed from './Feed';

const Activity = ({activities}) => {

    return (
        <main className='flex flex-1 flex-col bg-sky-500 '>
            {activities.length ?(
                <Feed activities={activities}/>
            ):(
                <p style={{marginTop: "2rem"}}>
                    No Activity To Display 
                </p>
            )}
            <div className="flex items-center justify-center">
                <Link className="flex bg-sky-600 px-4 py-2 mb-3 rounded-lg w-1/5 items-center justify-center" to='/newActivity'>ADD</Link>
            </div>
           
        </main>
    )
}

export default Activity