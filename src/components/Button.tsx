import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classe?: string;
  onClick?: () => void;
};

function Button({ children, classe, onClick }: Props) {
  const padraoClasse =
    "font-semibold flex gap-3 justify-center outline-zinc-200 hover:outline-1 transform duration-200 hover:scale-101 hover:shadow-xl rounded-2xl p-2 text-center";
  return (
    <button className={`${padraoClasse} ${classe}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
