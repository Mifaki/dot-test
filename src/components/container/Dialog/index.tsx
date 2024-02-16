import { forwardRef } from "react";

type Props = {
    children: React.ReactNode;
    toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
    ({
        children,
        toggleDialog }, ref) => {
        return (
            <dialog
                ref={ref}
                onClick={(e) => {
                    if (e.currentTarget === e.target) {
                        toggleDialog();
                    }
                }}
                className='w-[60%] mx-auto p-6 md:p-12 rounded-lg bg-card text-text-primary border-2 border-solid border-border'
            >
                <div className="flex flex-col justify-center">
                    {children}
                </div>
            </dialog>
        );
    }
);
export default Dialog;
