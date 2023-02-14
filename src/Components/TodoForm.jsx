import React, { useState } from 'react'
import TodoList from '../Components/TodoList'

const TodoForm = () => {

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleInputChange = (e) => {
        setTask(e.target.value);
        console.log(task)

    }

    const addTask = () => {
        if (task !== '') {
            taskList.push({ task: task, isDone: false, isCompleted: false })
            console.log(taskList)
            setTask('')
        } else {
            alert('empty')
        }
    }



    const completeTask = (i) => {
        setTaskList(
            taskList.map((task, index) => {
                if (index === i) {
                    return { ...task, isCompleted : !task.completed };
                }
                return task;
            })
        );
    }
    const onDelete = (i) => {
        const selectedItem = taskList.findIndex((item, index) => index === i);
        const newItems = [...taskList];
        newItems.splice(selectedItem, 1);
        setTaskList(newItems)
    }



    const renderTasks = () => {
        if (taskList?.length !== 0) {
            return taskList?.map((item, index) => {
                return (
                    <TodoList item={item} key={index} onComplete={() => completeTask(index)} onDelete={() => onDelete(index)} />
                )
            })
        }
    }





    return (
        <>
            <section className='form-container' >
                <div>
                   <h2>Add a Task </h2>
                <input type={'text'} value={task} onChange={handleInputChange} />
                <button onClick={addTask}>Add Task</button>
                <div>
                    {renderTasks()}
                </div>  
                </div>
       
            </section>
        </>
    )
}

export default TodoForm