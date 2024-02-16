type ButtonProps = {
    type: "submit" | "button"
    label: string
    color: "Accent" | "Yellow" | "Purple" | "Turquoise" | "Blue",
    onClick?: () => void;
    width: "Fit" | "Full"
    size: "Small" | "Medium" | "Large" | "Center"
    className?: string
    disabled?: boolean
}
const Button = ({
    type,
    label,
    color,
    onClick,
    width,
    size,
    className,
    disabled = false
}: ButtonProps) => {

    const getButtonColor = (color: string) => {
        switch (color) {
            case "Accent":
                return 'bg-accent hover:bg-accent-dark'

            case "Yellow":
                return 'bg-accent-yellow hover:bg-accent-yellow-dark'

            case "Purple":
                return 'bg-accent-purple hover:bg-accent-purple-dark'

            case "Accent":
                return 'bg-accent-turq hover:bg-accent-turq-dark'

            case "Accent":
                return 'bg-accent-blue hover:bg-accent-blue-dark'

            default:
                return '';
        }
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                    ${getButtonColor(color)}
                    ${width === "Fit" ? "w-fit flex justify-center" : "w-full flex justify-center"}
                    ${size === "Small" ? "caption-2" : size === "Medium" ? "caption-1" : "body-2"}
                    font-medium rounded-[10px] py-3 px-6 ${className}
            `}
        >
            {label}
        </button>
    )
}

export default Button