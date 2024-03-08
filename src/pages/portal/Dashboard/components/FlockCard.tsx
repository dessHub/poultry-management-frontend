import { FC } from "react";
import TextAvatar from "@/components/atoms/TextAvatar";
import { avatarBgColors } from "@/data/colors";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
    slug: string;
    name: string;
}

const FlockCard: FC<Props> = ({ slug, name }) => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <NavLink to={`${pathName}/flocks/${slug}`} key={slug} className="grid grid-cols-3 gap-0 hover:bg-neutral-700 px-5 py-3 border-b border-neutral-700">
            <div className="col-span-2 flex items-center">
                <TextAvatar name="Farm One" bgColor={avatarBgColors[0]} isRounded={false} />
                <div className='flex-1 px-2'>
                    <div className="text-xs text-neutral-100">{name}</div>
                    <div className="text-xs">{slug}</div>
                </div>
            </div>
            <div className="col-span-1 flex justify-end items-center">
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </div>
        </NavLink>
    )
}

export default FlockCard;
