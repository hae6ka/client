import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSelfDevelopmentPost } from "../../redux/features/postSlice";

function App() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [popularity, setPopularity] = useState('');
    const [password, setPassword] = useState('');
    const imgUrl = null;

    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(addSelfDevelopmentPost({ title, text, imgUrl, popularity, password }));
            setTitle('');
            setText('');
            setPopularity('');
            setPassword('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main>
            <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value )} />
            <input type="text" placeholder="text" value={text} onChange={e => setText(e.target.value )} />
            <input type="text" placeholder="popularity" value={popularity} onChange={e => setPopularity(e.target.value )} />
            <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value )} />
            
            <button onClick={handleSubmit}>add selfdevelopment post</button>
        </main>
    )
}

export default App;