import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TimePicker } from '../components/TimePicker';

// Mock DateTimePicker
jest.mock('@react-native-community/datetimepicker', () => 'DateTimePicker');

describe('TimePicker', () => {
  const mockTime = new Date('2024-01-01T14:30:00');
  const mockOnTimeChange = jest.fn();
  const mockOnConfirm = jest.fn();

  it('renders DateTimePicker with correct props', () => {
    const { UNSAFE_getByType } = render(
      <TimePicker
        time={mockTime}
        onTimeChange={mockOnTimeChange}
        onConfirm={mockOnConfirm}
      />
    );

    const picker = UNSAFE_getByType('DateTimePicker');
    expect(picker.props.value).toBe(mockTime);
    expect(picker.props.mode).toBe('time');
    expect(picker.props.is24Hour).toBe(false);
  });

  it('renders confirm button', () => {
    const { getByText } = render(
      <TimePicker
        time={mockTime}
        onTimeChange={mockOnTimeChange}
        onConfirm={mockOnConfirm}
      />
    );

    expect(getByText('Set Alarm')).toBeTruthy();
  });

  it('calls onConfirm when confirm button is pressed', () => {
    const { getByText } = render(
      <TimePicker
        time={mockTime}
        onTimeChange={mockOnTimeChange}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.press(getByText('Set Alarm'));
    expect(mockOnConfirm).toHaveBeenCalled();
  });
}); 