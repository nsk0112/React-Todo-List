import React, { useEffect } from 'react'
import './Popup.scss'

export function Popup(props) {
    // useEffect(() => {
    //     console.log(props);
    // }, [props])

    const yesButton = () => {
        // props.item.deleteItem = true;
        // props.delBtnClicked()
        // console.log(props.item.deleteItem);
        let x = props.selected.title;
        console.log(x);
        let data = props.list.filter(item => item.title !== x)
        console.log('data', data);
        props.passData(data);
    }

    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div className="content">
                    <h3>Are you sure you want to delete task "{props.selected.title}"?</h3>
                    <div className="buttons">
                        <button onClick={yesButton} className="yes-button button">Yes</button>
                        <br />
                        <button onClick={() => props.setTrigger(false)} className="no-button button">No</button>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}
