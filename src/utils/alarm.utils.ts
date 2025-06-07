export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
};

export const handleTimeChange = (
  event: any, 
  selectedTime: Date | undefined,
  setTempTime: (time: Date) => void
): void => {
  if (selectedTime) {
    setTempTime(selectedTime);
  }
};

export const handleTimeConfirm = (
  tempTime: Date,
  setTime: (time: Date) => void,
  setIsActive: (isActive: boolean) => void,
  setShowPicker: (show: boolean) => void,
  onAlarmSet?: (time: Date) => void
): void => {
  setTime(tempTime);
  setIsActive(true);
  if (onAlarmSet) {
    onAlarmSet(tempTime);
  }
  setShowPicker(false);
}; 