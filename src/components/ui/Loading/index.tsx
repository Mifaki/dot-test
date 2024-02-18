
type LoadingProps = {
    text: string
}

const Loading = ({text}: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <img src="/gif/loading.gif" alt="Loading GIF" />
        <p className="body-1 font-semibold">{text}</p>
    </div>
  )
}

export default Loading