import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TimeDisplay } from '../components/TimeDisplay';

describe('TimeDisplay', () => {
  const mockTime = new Date('2024-01-01T14:30:00');
  const mockOnPress = jest.fn();

  it('renders time correctly', () => {
    const { getByText } = render(
      <TimeDisplay
        time={mockTime}
        isActive={false}
        onPress={mockOnPress}
      />
    );

    expect(getByText('02:30 PM')).toBeTruthy();
  });

  it('shows "Tap to set alarm" when not active', () => {
    const { getByText } = render(
      <TimeDisplay
        time={mockTime}
        isActive={false}
        onPress={mockOnPress}
      />
    );

    expect(getByText('Tap to set alarm')).toBeTruthy();
  });

  it('shows "Alarm Set" when active', () => {
    const { getByText } = render(
      <TimeDisplay
        time={mockTime}
        isActive={true}
        onPress={mockOnPress}
      />
    );

    expect(getByText('Alarm Set')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <TimeDisplay
        time={mockTime}
        isActive={false}
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText('02:30 PM'));
    expect(mockOnPress).toHaveBeenCalled();
  });
}); 