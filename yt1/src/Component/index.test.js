/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { screen,render, fireEvent } from '@testing-library/react';
import Main from './Main';

describe('Main component', () => {
  test('handleClick function updates employee teamName correctly', () => {
    const { getByText } = render(<Main />);
    console.error = jest.fn();
    
    // Find a card element to simulate a click
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cardElement = getByText(/Backend Developer/); // Adjust the text as per your UI
    
    // Simulate a click on the card element
    fireEvent.click(cardElement);

    // Check if the teamName of the clicked employee is updated correctly
    // eslint-disable-next-line testing-library/no-node-access
    const updatedTeamName = getByText(/Backend Developer/).parentNode.dataset.teamname; // Assuming you have data-teamname attribute in the parent node
    expect(updatedTeamName).toBe('Team-A'); // Adjust the expected value based on your test case
  });

  // Add more test cases as needed to cover other scenarios
});
