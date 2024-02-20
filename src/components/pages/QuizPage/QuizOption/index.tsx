type QuizOptionsProps = {
    options: string
    color: string
    onClick: () => void
}

const QuizOptions = ({
    options,
    color,
    onClick,
}: QuizOptionsProps) => {

    const getOptionColor = (color: string) => {
        switch (color) {
            case "Yellow":
                return 'bg-accent-yellow hover:bg-accent-yellow-dark'
            case "Purple":
                return 'bg-accent-purple hover:bg-accent-purple-dark'
            case "Turquoise":
                return 'bg-accent-turq hover:bg-accent-turq-dark'
            case "Blue":
                return 'bg-accent-blue hover:bg-accent-blue-dark'
            default:
                return '';
        }
    }

    return (
        <button
            className={`${getOptionColor(color)} heading-6 font-semibold p-4 rounded-lg`}
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: options }}
        />
    )
}

export default QuizOptions