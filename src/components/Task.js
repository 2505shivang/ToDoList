

const Task = (props) => {
    const {discription} = props
    return(
        <li> {discription} {props.children}</li>
    );
} 

export default Task;