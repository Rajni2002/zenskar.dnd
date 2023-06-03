import React from 'react';


const App = ({ listValues = null }) => {
    return (
        <ul>Dropdowns
            {listValues.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    );
};

export default App;
