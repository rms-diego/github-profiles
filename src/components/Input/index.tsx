import styles from "@/styles/components/Input/styles.module.scss";

type InputProps = {
  label: string;
  type?: string;
  placeholder: string;
  handleInputChange: (payload: string) => void;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  handleInputChange,
}: InputProps) {
  return (
    <label className={styles.inputContainer}>
      {label}

      <input
        type={type}
        placeholder={placeholder}
        onChange={({ target }) => handleInputChange(target.value)}
      />
    </label>
  );
}
