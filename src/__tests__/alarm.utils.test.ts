import { formatTime, handleTimeChange, handleTimeConfirm } from '../utils/alarm.utils';

describe('Alarm Utils', () => {
  describe('formatTime', () => {
    it('should format time in 12-hour format', () => {
      const date = new Date('2024-01-01T14:30:00');
      expect(formatTime(date)).toBe('02:30 PM');
    });

    it('should format midnight correctly', () => {
      const date = new Date('2024-01-01T00:00:00');
      expect(formatTime(date)).toBe('12:00 AM');
    });

    it('should format noon correctly', () => {
      const date = new Date('2024-01-01T12:00:00');
      expect(formatTime(date)).toBe('12:00 PM');
    });
  });

  describe('handleTimeChange', () => {
    it('should update tempTime when valid time is selected', () => {
      const setTempTime = jest.fn();
      const selectedTime = new Date('2024-01-01T14:30:00');
      
      handleTimeChange({}, selectedTime, setTempTime);
      
      expect(setTempTime).toHaveBeenCalledWith(selectedTime);
    });

    it('should not update tempTime when no time is selected', () => {
      const setTempTime = jest.fn();
      
      handleTimeChange({}, undefined, setTempTime);
      
      expect(setTempTime).not.toHaveBeenCalled();
    });
  });

  describe('handleTimeConfirm', () => {
    it('should update all states and call onAlarmSet when provided', () => {
      const setTime = jest.fn();
      const setIsActive = jest.fn();
      const setShowPicker = jest.fn();
      const onAlarmSet = jest.fn();
      const tempTime = new Date('2024-01-01T14:30:00');

      handleTimeConfirm(
        tempTime,
        setTime,
        setIsActive,
        setShowPicker,
        onAlarmSet
      );

      expect(setTime).toHaveBeenCalledWith(tempTime);
      expect(setIsActive).toHaveBeenCalledWith(true);
      expect(setShowPicker).toHaveBeenCalledWith(false);
      expect(onAlarmSet).toHaveBeenCalledWith(tempTime);
    });

    it('should update states without calling onAlarmSet when not provided', () => {
      const setTime = jest.fn();
      const setIsActive = jest.fn();
      const setShowPicker = jest.fn();
      const tempTime = new Date('2024-01-01T14:30:00');

      handleTimeConfirm(
        tempTime,
        setTime,
        setIsActive,
        setShowPicker
      );

      expect(setTime).toHaveBeenCalledWith(tempTime);
      expect(setIsActive).toHaveBeenCalledWith(true);
      expect(setShowPicker).toHaveBeenCalledWith(false);
    });
  });
}); 