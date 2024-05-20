// import {useRef, useState} from 'react';
// import axios from "axios";
//
// const WebSock = () => {
//     const [messages, setMessages] = useState([]);
//     const [value, setValue] = useState('');
//     const ws = useRef(null);
//     const [connected, setConnected] = useState(false);
//     const [username, setUsername] = useState('');
//
//     function connect() {
//         const socket = new WebSocket('ws://localhost:2000');
//
//         socket.onopen = () => {
//             setConnected(true);
//         };
//
//         socket.onmessage = () => {
//
//         };
//
//         socket.onclose = () => {
//             console.log('Socket закрыт');
//         };
//
//         socket.onerror = () => {
//             console.log('Socket произошла ошибка');
//         };
//
//         return () => {
//             socket.close();
//         }
//     }
//
//     const sendMessage = async () => {
//         await axios.post('http://localhost:2000/new-message', {
//             message: value,
//             id: Date.now()
//         });
//
//         setValue('');
//     }
//
//     if (!connected) {
//         return (
//             <div>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='Введите ваше имя'
//                         value={username}
//                         onChange={e => setUsername(e.target.value)}
//                     />
//                     <button onClick={connect}>Войти</button>
//                 </div>
//             </div>
//         )
//     }
//
//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     value={value}
//                     onChange={e => setValue(e.target.value)}
//                 />
//                 <button onClick={sendMessage}>Отправить</button>
//             </div>
//             <div>
//                 {messages.map(m => (
//                     <div key={m.id} style={{border: '1px solid red'}}>
//                         {m.message}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default WebSock;