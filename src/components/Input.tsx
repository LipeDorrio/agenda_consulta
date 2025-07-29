type Props = {
  classe?: string;
  type?: string;
  placeholder?: string;
};

function Input({ classe, type, placeholder }: Props) {
  const padraoClasse = "outline-2 hover:outline-blue-900 rounded-2xl p-3";
  return <input className={`${padraoClasse} ${classe}`} type={type} placeholder={placeholder} />;
}

export default Input;
