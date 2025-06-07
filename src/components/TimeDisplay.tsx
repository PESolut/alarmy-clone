import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { alarmStyles as styles } from '../styles/alarm.styles';
import { formatTime } from '../utils/alarm.utils';

interface TimeDisplayProps {
  time: Date;
  isActive: boolean;
  onPress: () => void;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, isActive, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.timeContainer}
      onPress={onPress}
    >
      <Text style={styles.timeText}>{formatTime(time)}</Text>
      <Text style={styles.tapToEdit}>
        {isActive ? 'Alarm Set' : 'Tap to set alarm'}
      </Text>
    </TouchableOpacity>
  );
}; 