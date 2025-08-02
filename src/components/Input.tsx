type Props = {
  classe?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  nm_label?: string;
};

function Input({ classe, type, placeholder, label, nm_label }: Props) {
  const padraoClasse = "outline-1 hover:outline-blue-900 rounded-2xl p-3";

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={nm_label} className="mb-2">
          {label}
        </label>
      )}
      <input
        className={`${padraoClasse} ${classe}`}
        type={type}
        placeholder={placeholder}
        id={nm_label}
      />
    </div>
  );
}

export default Input;
