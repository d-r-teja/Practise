import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {
    // first approach of useState for multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');//default useState() will return string
    const [enteredDate, setEnteredDate] = useState('');

    //above three states can bee combined into one as object like below(second and third approach)
    //const [userInput, setUserInput] = useState({
    //    enteredTitle:'',
    //    enteredAmount: '',
    //    enteredDate: ''
    //});

    const titleChangeHandler = (event) =>{
        // first and best approach
        setEnteredTitle(event.target.value);

        //another way but even this is not good practise as it leads to incorrect update because react will not do this immediately intsantly
        //setUserInput({...userInput,
        //    enteredTitle:event.target.value});

        //one more approach better than second one

        //setUserInput((prevState) => {
        //    return{...prevState, enteredTitle:event.target.value};
        //})
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

        //setUserInput({...userInput,
        //    enteredAmount:event.target.value});
        
        //setUserInput((prevState) => {
        //    return{...prevState, enteredAmount:event.target.value};  
        //})  
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

        //setUserInput({...userInput,
        //   enteredDate:event.target.value});

        //setUserInput((prevState) => {
        //    return{...prevState, enteredAmount:event.target.value};  
        //  });    
    };

    const submitHandler = (event) =>{
        //this will prevent reloading the page when form is submitted(JS concept)
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //This the concept of lifting state up - 
        //passing data from child to parent component
        props.onSaveExpenseData(expenseData);
        
        //this works as two way data binding which cleares the values after submission
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>            
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value = {enteredDate} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='.new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;