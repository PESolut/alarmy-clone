import React, { useState } from 'react';
import { View } from 'react-native';
import { alarmStyles as styles } from '../styles/alarm.styles';
import { TimeDisplay } from './TimeDisplay';
import { TimePicker } from './TimePicker';
import { handleTimeChange, handleTimeConfirm } from '../utils/alarm.utils';

interface AlarmProps {
  onAlarmSet?: (time: Date) => void;
}

export const Alarm: React.FC<AlarmProps> = ({ onAlarmSet }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [tempTime, setTempTime] = useState(new Date());

  const onTimeChange = (event: any, selectedTime?: Date) => {
    handleTimeChange(event, selectedTime, setTempTime);
  };

  const onConfirm = () => {
    handleTimeConfirm(
      tempTime,
      setTime,
      setIsActive,
      setShowPicker,
      onAlarmSet
    );
  };

  const handleTimePress = () => {
    setTempTime(time);
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <TimeDisplay
        time={time}
        isActive={isActive}
        onPress={handleTimePress}
      />
      
      {showPicker && (
        <TimePicker
          time={tempTime}
          onTimeChange={onTimeChange}
          onConfirm={onConfirm}
        />
      )}
    </View>
  );
}; 