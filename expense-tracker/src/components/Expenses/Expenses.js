import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
    const [fileteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }
    const filterExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === fileteredYear;
    })
    
    return (
        <div>        
            <Card className="expenses">
                <ExpensesFilter selected={fileteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseChart expenses={filterExpenses}></ExpenseChart>
                <ExpenseList items={filterExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;