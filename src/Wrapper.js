import Tweet from './Tweet';

function Wrapper(listOfObjects){
    let list = [{username:"Erick", date:"Today", message:"Message1", key:"1"},
                {username:"Abby", date:"Yesterday", message:"Message2", key:"2"},
                {username:"Cuca", date:"Tomorrow", message:"Message3", key:"3"},]
    return (
        <div>
            <h3>Recent tweets:</h3>
            <ul>{list.map(t => <li key={t.key}> <Tweet username={t.username} date={t.date} message={t.message} /> </li>)}</ul>
        </div>
    );
};

export default Wrapper;