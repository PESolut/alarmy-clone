import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AlarmProps {
  onAlarmSet?: (time: Date) => void;
}

export const Alarm: React.FC<AlarmProps> = ({ onAlarmSet }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [tempTime, setTempTime] = useState(new Date());

  const handleTimeConfirm = () => {
    setTime(tempTime);
    setIsActive(true);
    if (onAlarmSet) {
      onAlarmSet(tempTime);
    }
    setShowPicker(false);
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    if (selectedTime) {
      setTempTime(selectedTime);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.timeContainer}
        onPress={() => {
          setTempTime(time);
          setShowPicker(true);
        }}
      >
        <Text style={styles.timeText}>{formatTime(time)}</Text>
        <Text style={styles.tapToEdit}>
          {isActive ? 'Alarm Set' : 'Tap to set alarm'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <View style={styles.pickerContainer}>
          <DateTimePicker
            value={tempTime}
            mode="time"
            is24Hour={false}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onTimeChange}
            style={styles.picker}
          />
          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={handleTimeConfirm}
          >
            <Text style={styles.buttonText}>Set Alarm</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1C1C1E',
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tapToEdit: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 5,
  },
  pickerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  picker: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
}); 