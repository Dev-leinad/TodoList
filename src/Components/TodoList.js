import React from "react";
import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoList = (props) => {
    const { onDelete, onComplete, item } = props

    return (
        <>
            <section className="list-container" >
               
                <ul className="list">
 <div>
    
                    {item?.isCompleted ? <p style={{textDecoration :' line-through',  fontSize: 25}} >{item?.task}</p> :
                        <p style={{fontSize :28}}>{item?.task}</p>}
                </div>

                <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', listStyle: 'none' }}>


                      <FaCheck size={24} style={{color : 'green', marginRight :20}} onClick={onComplete}/>
                    <FaTrash size={24} style={{color : 'red', marginRight :20}} onClick={onDelete} />

                  
                    {/* <FaAngleDoubleRight  /> */}
                </div>

                </ul>
            </section>
        </>
    )
}

export default TodoList;