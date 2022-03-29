import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetup(meetupData){
        //by default fetch sends a GET request
        //for POSt we use second argument in fetch
        //use .then or async await at the end to confirm 
        fetch('https://react-basics-c703d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method : 'POST',
            body: JSON.stringify(meetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(()=>{
            navigate('/')
        });
    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetup}/> 
        </section>
    );
}

export default NewMeetupPage;