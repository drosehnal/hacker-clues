import { AnchorHTMLAttributes } from "react";

export default (props: AnchorHTMLAttributes<{}>) => (<a 
    {...props} 
    className={`${props.className} hover:underline text-[hotpink] visited:text-slate-400`}
/>);