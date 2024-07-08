import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';
import ExpenseList from './ExpenseList';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
    const [explist, setExpList] = useState([]);
    const [expinfo, setExpInfo] = useState({});
    const [expDescIn, setExpDescIn] = useState('');
    const [expIn, setExpIn] = useState('');
    const [expcatIn, setExpcatIn] = useState('defaultCat');

    useEffect(() => {
        if (props.changedArr.length !== explist.length) {
            setExpList(props.changedArr);
        }
    }, [props.changedArr, explist]);

    useEffect(() => {
        if (props.editArr.length !== explist.length) {
            const id = props.editExpId;
            const editItem = explist.find(item => item.id === id);
            if (editItem) {
                setExpDescIn(editItem.expDesc);
                setExpIn(editItem.exp);
                setExpcatIn(editItem.expcat);
            }
            setExpList(props.editArr);
        }
    }, [props.editArr, explist, props.editExpId]);

    useEffect(() => {
        if (expinfo.id) {
            setExpList([...explist, expinfo]);
            props.onPassData([...explist, expinfo]);
        }
    }, [expinfo, explist, props]);

    const handleChangeExpDesc = (e) => {
        setExpDescIn(e.target.value);
    };

    const handleChangeExp = (e) => {
        setExpIn(e.target.value);
    };

    const handleChangeExpCat = (e) => {
        setExpcatIn(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (expDescIn && expIn && expcatIn !== 'defaultCat') {
            const d = new Date();
            const x = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
            const dummyObj = {
                id: uuidv4(),
                expDesc: expDescIn,
                exp: expIn,
                expcat: expcatIn,
                date: x,
            };
            setExpInfo(dummyObj);
            setExpDescIn('');
            setExpIn('');
            setExpcatIn('defaultCat');
        } else {
            setExpcatIn('defaultCat');
        }
    };

    return (
        <>
            <div id='add-expense-form' className='expenseForm'>
                <h1>Add Expense Form</h1>
                <form>
                    <div className='form-in'>
                        <input required onChange={handleChangeExpDesc} value={expDescIn} type='text' placeholder='Expense Description' />
                    </div>
                    <div className='form-in'>
                        <input required onChange={handleChangeExp} value={expIn} type='number' placeholder='Expense' />
                    </div>
                    <select required onChange={handleChangeExpCat} value={expcatIn}>
                        <option disabled value='defaultCat'>
                            --Select Expense Category--
                        </option>
                        <option value='Shopping'>Shopping</option>
                        <option value='Travel'>Travel</option>
                        <option value='Commute'>Commute</option>
                    </select>
                    <button onClick={handleSubmit} id='AEF-submit-btn'>
                        Submit
                    </button>
                </form>
            </div>
            <div id='expense-list-division' className='division'></div>
        </>
    );
};

export default AddExpenseForm;
