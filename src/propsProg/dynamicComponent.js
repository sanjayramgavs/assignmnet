import React, { useState } from 'react';

// Dynamic component that renders based on user input
const DynamicComponent = ({ inputText, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  }

  return (
    <div>
      <h2>Dynamic Component</h2>
      <p>User Input: {inputText}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  );
}

const DCApp = () => {
  const [inputText, setInputText] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleShowComponent = () => {
    setShowComponent(true);
  }

  return (
    <div>
      <h1>Dynamic Component Example</h1>
      <form>
        <label>
          Enter Text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleShowComponent}>Show Component</button>
      </form>

      {showComponent && <DynamicComponent inputText={inputText} initialLikes={0} />}
    </div>
  );
}

export default DCApp;