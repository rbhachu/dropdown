import React from 'react';
import './assets/scss/App.scss';
import Data from './data/assignes.json' // datafile complete list
//import Data from './data/assignes-short.json' // datafile test short list
//import Data from './data/assignes-alt.json' // datafile test alt index, value list
import Dropdown from './stories/Dropdown'; // dropdown reusable component

const Datafile = Data; // datafile to pass to dropdown

function App() {

  return (

    <main>

      <div className="App">

        <h1>Test Form</h1>

        <form 
          id="test-form" 
          name="test-form"
          action="/" 
          aria-label="Select Person"
        >

          <Dropdown 
            Datafile={Datafile} // JSON file to use
            DatafileNameValue='name' // JSON file name value to use
            ButtonID='button-person' // Button ID value
            SelectLabelID='person' // Label/Select ID value
            SelectLabelText='ASSIGN ITEM' // H2/Label inner text
            SelectMaxSize={10} // Select Dropdown Max Options to show with scroll
            InputPlaceHolderText='Search for a user' // Default Placeholder Text for Input Filter box
            SelectColourBG='pink' // selected option bg colour, default #ccc (can be name (pink) or hex (#ccc) value)
          />

          <input type="submit" value="Submit" className="submit" />

        </form> 

      </div>

  </main>

  );

}

export default App;
