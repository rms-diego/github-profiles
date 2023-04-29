import styles from "@/styles/components/Input/styles.module.scss";

type InputProps = {
  label: string;
  type?: string;
  placeholder: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <label className={styles.inputContainer}>
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  );
}
