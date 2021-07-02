import * as HIcons from "@heroicons/react/outline"

export default function DynamicIcons(props) {
    const { ...icons } = HIcons
    const TheIcon = icons[props.icon]

    return (
        <>
            <TheIcon className="h-6 w-6 mr-2 text-sm" aria-hidden="true" />
        </>
    )
}
