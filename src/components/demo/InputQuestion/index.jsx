import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const InputQuestion = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="flex items-center justify-around border border-gray-300 rounded-lg p-2 shadow-sm">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        placeholder="Preguntar algo sobre la empresa..."
        className="flex-grow bg-transparent outline-none text-gray-600 resize-none overflow-hidden"
      />
      <button className="bg-blue-500 text-white rounded-lg p-2 ml-2">
        <AiOutlineSend className="w-auto h-auto" />
      </button>
    </div>
  );
};

export default InputQuestion;
