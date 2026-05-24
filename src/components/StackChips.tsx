const StackChips = ({chips} : {chips: string[]}) => {
    return <div className="flex flex-row flex-wrap gap-2">
        {chips.map((topic) => (
            <span
                key={topic}
                className="p-2 text-xs bg-amber-100 rounded-xl flex items-center font-mono"
            >{topic}</span>
        ))}
    </div>
}

export default StackChips;