import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState(''); //Declaramos una variable de estado llamada inputText y le asignamos '' (valor vacío)

    const handleTextChange = event => {
        setInputText(event.target.value); //muestra el valor del input que escribimos
    }; 

    const handleSend = () => {
        onSend(inputText);
        setInputText(''); //limpiamos el input text cuando hacemos click
    }

    return (
        <div>
            <input 
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange} //cuando el campo de un formulario cambia, se lanza el evento
            />
            <button
                data-testid="sendButton"
                onClick={handleSend}
            >
                Send
            </button>
        </div>
    )
}

export default NewMessageForm;
