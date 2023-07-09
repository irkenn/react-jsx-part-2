function Tweet(props){
    return (
    <ul>
        <li>"Username:" {props.username}</li>
        <li>"Date:" {props.date}</li>
        <li>"Message:" {props.message}</li>
    </ul>
    );
};

export default Tweet;