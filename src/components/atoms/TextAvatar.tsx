import { FC } from "react";

interface Props {
    name: string;
    bgColor?: string;
    textColor?: string;
    isRounded?: boolean
}

const TextAvatar: FC<Props> = ({ name, bgColor, textColor, isRounded }) => {
    const initial = name[0];
  
    return (
      <span className={` ${isRounded ? 'rounded-full' : 'rounded-md'} ${bgColor ? bgColor : 'bg-orange-400'}  ${textColor ? textColor : 'text-neutral-100'} p-2 h-7 w-7 flex justify-center items-center`}>
        {initial}
      </span>
    );
};

export default TextAvatar;