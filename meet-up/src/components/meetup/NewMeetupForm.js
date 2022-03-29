import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
function NewMeetupForm(props){
    const tittleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        //reading the value refs is good choice but for write use states
        const eneteredTitle = tittleInputRef.current.value;
        const eneteredImage = imageInputRef.current.value;
        const eneteredAddress = addressInputRef.current.value;
        const eneteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: eneteredTitle,
            image: eneteredImage,
            address: eneteredAddress,
            description: eneteredDescription
        };

        console.log(meetupData);
        props.onAddMeetup(meetupData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={tittleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows="5" required id="description" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;