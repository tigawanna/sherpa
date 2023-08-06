import { twMerge } from "tailwind-merge";
interface TheInoutProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export function TheInout({...props}:TheInoutProps){

return (
  <input
    {...props}
    className={twMerge("input input-sm input-bordered w-full max-w-xs", props.className)}
  />
);
}
