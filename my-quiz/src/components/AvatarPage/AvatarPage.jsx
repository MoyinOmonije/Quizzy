import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AvatarSelection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const history = useHistory();

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const startQuiz = () => {
    // Here, you can perform any additional actions before navigating to the quiz page,
    // such as validating the selected avatar.
    // Once everything is ready, navigate to the quiz page
    history.push('./components/Quiz/Quiz');
  };

  return (
    <div>
      <h2>Select Your Avatar</h2>
      <div>
        {/* Avatar selection options */}
        <button onClick={() => handleAvatarSelect('avatar1')}>
          Avatar 1
        </button>
        <button onClick={() => handleAvatarSelect('avatar2')}>
          Avatar 2
        </button>
        <button onClick={() => handleAvatarSelect('avatar3')}>
          Avatar 3
        </button>
        {/* You can add more avatar options as needed */}
      </div>
      {selectedAvatar && (
        <div>
          {/* Display the selected avatar */}
          <p>You selected: {selectedAvatar}</p>
          {/* Button to start the quiz */}
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}
    </div>
  );
};

export default AvatarSelection;
