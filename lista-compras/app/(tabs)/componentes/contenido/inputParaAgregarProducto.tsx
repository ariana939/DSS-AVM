import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

export const inputParaAgregarProducto = ({
  value,
  onChangeText,
  onSubmitEditing,
}: Props) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Agregar producto (ej: Leche)"
      style={styles.input}
      returnKeyType="done"
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
});