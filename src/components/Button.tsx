import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classe?: string;
};

function Button({children, classe}: Props) {
  const padraoClasse = "font-semibold flex gap-3 justify-center outline-blue-400 hover:outline-1 transform duration-200 hover:scale-101 hover:shadow-xl rounded-2xl p-2 text-center"
  return (
    <button className={`${padraoClasse} ${classe}`}>
      {children}
    </button>
  );
}

export default Button;
