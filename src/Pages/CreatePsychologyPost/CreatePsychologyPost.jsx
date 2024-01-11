import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPsychologyPost } from "../../redux/features/postSlice";

function App() {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [popularity, setPopularity] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    let data = new FormData();
    console.log(data);

    const handleSubmit = () => {
        try {

            data.append('title', title);
            data.append('text', text);
            data.append('image', image);
            data.append('popularity', popularity);
            data.append('password', password);

            console.log(data);

            for (let [i, j] of data) {
                console.log(i, ' = ', j);
            }

            dispatch(addPsychologyPost(data));
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
            <input type="file" placeholder="file" onChange={(e) => setImage(e.target.files[0])} />
            <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value )} />
            {/* <input type="text" placeholder="text" value={text} onChange={e => setText(e.target.value )} /> */}
            <textarea placeholder="text" value={text} onChange={e => setText(e.target.value )}></textarea>
            <input type="text" placeholder="popularity" value={popularity} onChange={e => setPopularity(e.target.value )} />
            <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value )} />
            
            <button onClick={handleSubmit}>add selfdevelopment post</button>
        </main>
    )
}

export default App;