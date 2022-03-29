import MeetupList from "../components/meetup/MeetupList";
import { useState,useEffect } from "react";
/*
const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];
*/

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const[loadedMeetups, setLoadedMeeups] = useState([]);

  //second argument is for dependency or condition if it is empty [] component will render first time only and it should be external dependency one
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-basics-c703d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      //to extract the data in array instead of object as we have map to array.
      const meetups = [];

      //data is coming from firebase
      //... is spread operator in JS which copies all tha values into id
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeeups(meetups);
    });
  }, []);


  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      {/*
        <ul>
            {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>
            })}
        </ul>
        */}
      {/* replaced DUMMY_DATA with state to get the calues from db */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;