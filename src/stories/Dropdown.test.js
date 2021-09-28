import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
//import { Primary } from '../stories/Dropdown.stories';
//import { composeStory } from '@storybook/testing-react';
import * as stories from '../stories/Dropdown.stories';

const { Primary } = composeStories(stories);

test('check for title value equal to sub-heading', async () => {
  render(<Primary />);
  const labelElement = screen.getByTitle(/sub-heading/i);
  expect(labelElement).toBeInTheDocument();
});

/*
test('Simulates selection', () => {
  const { getByTestId, getAllByTestId } = render(<Primary />);
  //The value should be the key of the option
  fireEvent.change(getByTestId('select'))
  //fireEvent.change(getByTestId('select'), { target: { value: 1 } })
  let options = getAllByTestId('select-option')
  //expect(options[1].selected).toBe(true);
  //expect(options[1].selected).toBeTruthy();
  //expect(options[0]).toBeTruthy();
  expect(options).toBeTruthy();
})
*/