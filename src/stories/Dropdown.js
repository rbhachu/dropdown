import React, { useState } from 'react';
import './dropdown.scss';

export default function Dropdown ({ 
    Datafile, 
    DatafileNameValue, 
    SelectLabelID,
    SelectLabelText,
    ButtonID,
    SelectMaxSize, 
    InputPlaceHolderText,
    SelectColourBG
}) {

    // store selected name/option value state
    const [value, setValue] = useState('Select'); // initial select state

    // sort options list alphabetically
    const DatafileSorted = Datafile.sort((a, b) => a[DatafileNameValue].localeCompare(b[DatafileNameValue]));

    // list count + max list count
    const count = Object.keys(Datafile).length; // total json file entries
    const countMax = ((count >= SelectMaxSize) ? SelectMaxSize : count) // check if list count exceeds SelectMaxSize

    // toggle show/hide select dd on button click
    const [showResults, setShowResults] = useState(false)
    const handleClickButton = (e) => {
        setShowResults(!showResults); // toggle show/hide select options list div
    }

    // capture filter input query
    const [query, setQuery] = useState('')
    const handleInputChange = (e) => {
        setQuery(e.currentTarget.value.toLowerCase()); // capture input value
    }   

    // on option select capture value and close select
    const handleClickOption = (e) => {
        setValue(e.currentTarget.value); // capture selected option
        setShowResults(false);
        setQuery(''); // clear input on option select  
    }

    // css for selected option + fix against browser defaults bg colour overide
    const divStyle = {
        boxShadow: "0 0 10px 100px " + (SelectColourBG || "#ccc") + " inset"
    };

    let keyvalue = 1 // index for options list

    return (
        <div className="dropdown">

            <h2 title="sub-heading">{SelectLabelText}</h2>

            <button 
                id={ButtonID} 
                type="button" 
                onClick={handleClickButton}
            >
                {value}
            </button>

            {
                <div 
                    className={(!showResults) ? ('select-wrapper-close') : ('select-wrapper-open')}
                >

                    { count >= SelectMaxSize && 
                        <div className="input-wrapper">
                            <label htmlFor="filter-results" className="hide-element">Filter:</label>
                            <input 
                                type="text" 
                                name="filter-results"
                                id="filter-results"
                                placeholder={InputPlaceHolderText} 
                                onChange={handleInputChange}
                                value={query}
                            />
                        </div>
                    }

                    <label htmlFor={SelectLabelID} className="hide-element">{SelectLabelText}</label>
                    <select 
                        name={SelectLabelID} 
                        id={SelectLabelID} 
                        value={value} 
                        size={countMax} // default size on load 
                        className={(count < SelectMaxSize) ? ('hide-scroll') : null} // hide scroll if data list less than SelectMaxSize
                        readOnly
                    >
                        <option data-testid="select-option" key="0" value="select" hidden>Select</option>

                            {
                                DatafileSorted.filter(
                                item => item[DatafileNameValue]
                                .includes(query.toLowerCase()))
                                .map(filtered => {
                            
                                    return (
                                        <option
                                            data-testid="select-option"
                                            key={keyvalue++}
                                            value={filtered[DatafileNameValue]}
                                            className={keyvalue === 1 ? ('top-option') : null}
                                            style={filtered[DatafileNameValue] === value ? divStyle : null}
                                            onClick={handleClickOption}
                                        >
                                            {filtered[DatafileNameValue]}
                                        </option>
                                    )
    
                                })          
                            }

                    </select>

                </div>
            }

        </div> 
    );

  }