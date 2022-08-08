import React, { useState, useEffect } from 'react';
import notebook from '../pics/top2.png';
import notebookbottom from '../pics/bottomm.png';
import notebookmidright from '../pics/midright.png';
import notebookmidleft from '../pics/midleft.png';
import './List.scss';
import './Add.scss';
import { CgDanger } from "react-icons/cg"
import { BiTrash, BiReset } from "react-icons/bi"
import { Popup } from './Popup';

export const List = (props) => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    // const [deleteItem, setDeleteItem] = useState();
    const [selectedItem, setSelectedItem] = useState(null)
    const handleChange = event => {
        setItem(event.target.value);
    }

    const handleClick = event => {
        if (item) {
            setItemList([...itemList, {
                title: item,
                isChecked: false,
                isImportant: false,
                deleteItem: false
            }]);
            setItem("");
            console.log(itemList);
        }
    }

    const inputOnChanged = (event, clickedItem) => {
        const copy = [...itemList]
        const selectedItemIndex = copy.findIndex((item) => clickedItem.title === item.title);
        copy[selectedItemIndex].isChecked = !copy[selectedItemIndex].isChecked;

        setItemList(copy);
    }

    const importantChanged = (event, importantItem) => {
        const copy = [...itemList]
        const selectedItemIndex = copy.findIndex((item) => importantItem.title === item.title);
        copy[selectedItemIndex].isImportant = !copy[selectedItemIndex].isImportant;

        setItemList(copy);

    }

    const delBtnClicked = (event, deleteItem) => {
        setItemList(itemList.filter(item => item.title !== deleteItem.title))
        setButtonPopup(false);
    }

    const openPopup = (e, item) => {
        setSelectedItem(item);
        setButtonPopup(true);
        console.log(itemList)
        // if (item.deleteItem) {
        //     delBtnClicked(event, item);
        //     //setButtonPopup(false);
        // }
    };

    const passData = (data) => {
        setItemList(data);
        setButtonPopup(false);
    };

    const resetList = () => {
        setItemList([]);
    }

    // var active = 0;

    // const printActive = () => {
    //     for (let i = 0; i < itemList.length; i++) {
    //         if(!item[i].isChecked) {
    //             active++;
    //         }           
    //     }
    // }

    // useEffect(() => {

    // }, [itemList])

    return (
        <div className='list'>
            <div className='add'>
                <input type="text" className='new-task' placeholder='Add new task...' onChange={handleChange} value={item} />
                <button className='add-button' onClick={() =>{handleClick();}}>Add</button>
                <button className='reset-button' title="Reset list" onClick={() => {resetList()}}><BiReset /></button>
            </div>
            <div className="list-content">
                <img src={notebook} alt="notebook"></img>
                <div className='tasks'>
                    {itemList.map((item, i) => (
                        <div className='task-general' key={item.title}>
                            <div className='task'>
                                <img src={notebookmidleft} alt="notebook mid right"></img>
                                <div className="task-main">
                                    <p className={item.isChecked && item.isImportant ? 'p1' : (!item.isChecked && item.isImportant ? 'p2' : (item.isChecked && !item.isImportant ? 'p3' : 'p4'))}>{item.title}</p>
                                    <div className="buttons">
                                        <button className='delete-button' onClick={
                                            /*(e) => delBtnClicked(e, item) *** () => setButtonPopup(true)*/
                                            (e) => openPopup(e, item)}>
                                            <BiTrash className='delete' title='Delete task' />
                                        </button>
                                        <button className='important-button' onClick={(e) => importantChanged(e, item)}>
                                            <CgDanger className='important' title='Mark as important' />
                                        </button>
                                        <input type="checkbox" className='done' onChange={(e) => inputOnChanged(e, item)} title='Mark as completed' />
                                    </div>
                                </div>
                                <img src={notebookmidright} alt="notebook mid right"></img>
                            </div>
                        </div>
                    ))}
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} list={itemList} selected={selectedItem} passData={passData} className='popup'></Popup>
                <img src={notebookbottom} alt="notebook-bottom"></img>
            </div>
        </div>
    )
}
