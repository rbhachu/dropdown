import React from 'react';
import '../assets/scss/App.scss';
import Data1 from '../data/assignes.json' // datafile complete list
import Data2 from '../data/assignes-short.json' // datafile test short list
import Data3 from '../data/assignes-alt.json' // datafile test alt name value list
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown
};


const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Dropdown1',
  Datafile: Data1, // JSON file to use
  DatafileNameValue: 'name', // JSON file name value to use
  ButtonID: 'button-person', // Button ID value
  SelectLabelID: 'person', // Label/Select ID value
  SelectLabelText: 'ASSIGN ITEM', // H2/Label inner text
  SelectMaxSize: '10', // Select Dropdown Max Options to show with scroll
  InputPlaceHolderText: 'Search for a user', // Default Placeholder Text for Input Filter box
  SelectColourBG: 'pink' // selected option bg colour, default #ccc (can be name (pink) or hex (#ccc) value)
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: true,
  label: 'Dropdown2',
  Datafile: Data2, // JSON file to use
  DatafileNameValue: 'name', // JSON file name value to use
  ButtonID: 'button-person', // Button ID value
  SelectLabelID: 'person', // Label/Select ID value
  SelectLabelText: 'ASSIGN ITEM', // H2/Label inner text
  SelectMaxSize: '10', // Select Dropdown Max Options to show with scroll
  InputPlaceHolderText: 'Search for a user', // Default Placeholder Text for Input Filter box
  SelectColourBG: 'pink' // selected option bg colour, default #ccc (can be name (pink) or hex (#ccc) value)
};

export const Third = Template.bind({});
Third.args = {
  primary: true,
  label: 'Dropdown3',
  Datafile: Data3, // JSON file to use
  DatafileNameValue: 'person', // JSON file name value to use
  ButtonID: 'button-person', // Button ID value
  SelectLabelID: 'person', // Label/Select ID value
  SelectLabelText: 'ASSIGN ITEM', // H2/Label inner text
  SelectMaxSize: '10', // Select Dropdown Max Options to show with scroll
  InputPlaceHolderText: 'Search for a user', // Default Placeholder Text for Input Filter box
  SelectColourBG: 'pink' // selected option bg colour, default #ccc (can be name (pink) or hex (#ccc) value)
};