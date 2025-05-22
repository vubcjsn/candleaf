import Link from "next/link";

type ButtonProps =
  | {
      type: "button";
      onClick?: () => void;
      children: React.ReactNode;
    }
  | {
      type: "link";
      href: string;
      children: React.ReactNode;
    };

const classNames = "bg-[#56B280] py-1.5 px-10 text-white rounded-sm";

function Button(props: ButtonProps) {
  if (props.type === "button") {
    return (
      <button className={classNames} onClick={props.onClick}>
        {props.children}
      </button>
    );
  } else {
    return (
      <Link className={classNames} href={props.href}>
        {props.children}
      </Link>
    );
  }
}

export default Button;
