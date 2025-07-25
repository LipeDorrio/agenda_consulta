import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Button(props: Props) {
  return (
    <button className="font-semibold flex gap-3 justify-center outline-blue-300 bg-zinc-200/50 hover:outline-1 transform duration-200 hover:scale-101 hover:shadow-xl rounded-2xl p-2 text-center">
      {props.children}
    </button>
  );
}

export default Button;
