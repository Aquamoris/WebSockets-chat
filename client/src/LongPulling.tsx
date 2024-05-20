import {useEffect, useState} from "react";
import axios from "axios";

const LongPulling = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:2000/get-messages');
            console.log(data);

            setMessages(prev => [data, ...prev]);

            await subscribe();
        }
        catch (e) {
            setTimeout(() => {
                subscribe();
            }, 500)
        }
    }

    const sendMessage = async () => {
        await axios.post('http://localhost:2000/new-message', {
            message: value,
            id: Date.now()
        });

        setValue('');
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={sendMessage}>Отправить</button>
            </div>
            <div>
                {messages.map(m => (
                    <div key={m.id} style={{border: '1px solid red'}}>
                        {m.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LongPulling;