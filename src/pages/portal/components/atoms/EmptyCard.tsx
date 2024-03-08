import { InboxIcon } from "@heroicons/react/24/outline";

const EmptyCard = () => {

    return (
        <div className="flex items-center justify-center rounded-full w-28 h-28 bg-neutral-600">
            <InboxIcon className="h-10 w-10 text-neutral-300" />
        </div>
    )
}

export default EmptyCard;