import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alarm } from '../components/Alarm';

// Mock child components
jest.mock('../components/TimeDisplay', () => {
  const { View, Text, TouchableOpacity } = require('react-native');
  return {
    TimeDisplay: ({ time, isActive, onPress }: any) => (
      <TouchableOpacity testID="time-display" onPress={onPress}>
        <Text>{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</Text>
        <Text>{isActive ? 'Alarm Set' : 'Tap to set alarm'}</Text>
      </TouchableOpacity>
    ),
  };
});

jest.mock('../components/TimePicker', () => {
  const { View, Button } = require('react-native');
  return {
    TimePicker: ({ onConfirm }: any) => (
      <View testID="time-picker">
        <Button title="Set Alarm" onPress={onConfirm} />
      </View>
    ),
  };
});

describe('Alarm', () => {
  const mockOnAlarmSet = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders TimeDisplay with initial state', () => {
    const { getByTestId } = render(<Alarm onAlarmSet={mockOnAlarmSet} />);
    expect(getByTestId('time-display')).toBeTruthy();
  });

  it('does not show TimePicker initially', () => {
    const { queryByTestId } = render(<Alarm onAlarmSet={mockOnAlarmSet} />);
    expect(queryByTestId('time-picker')).toBeNull();
  });

  it('shows TimePicker when TimeDisplay is pressed', () => {
    const { getByTestId, getByText } = render(<Alarm onAlarmSet={mockOnAlarmSet} />);
    
    fireEvent.press(getByTestId('time-display'));
    expect(getByTestId('time-picker')).toBeTruthy();
  });

  it('calls onAlarmSet when alarm is confirmed', () => {
    const { getByTestId, getByText } = render(<Alarm onAlarmSet={mockOnAlarmSet} />);
    
    // Show picker
    fireEvent.press(getByTestId('time-display'));
    
    // Confirm alarm
    fireEvent.press(getByText('Set Alarm'));
    
    expect(mockOnAlarmSet).toHaveBeenCalled();
  });
}); 