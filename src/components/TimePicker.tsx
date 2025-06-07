import React from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { alarmStyles as styles } from '../styles/alarm.styles';

interface TimePickerProps {
  time: Date;
  onTimeChange: (event: any, selectedTime?: Date) => void;
  onConfirm: () => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ 
  time, 
  onTimeChange, 
  onConfirm 
}) => {
  return (
    <View style={styles.pickerContainer}>
      <DateTimePicker
        value={time}
        mode="time"
        is24Hour={false}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        onChange={onTimeChange}
        style={styles.picker}
      />
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={onConfirm}
      >
        <Text style={styles.buttonText}>Set Alarm</Text>
      </TouchableOpacity>
    </View>
  );
}; 