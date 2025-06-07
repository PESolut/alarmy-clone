import { StyleSheet } from 'react-native';

export const alarmStyles = StyleSheet.create({
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