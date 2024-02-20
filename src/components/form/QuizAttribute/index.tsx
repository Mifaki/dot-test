import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { categoryOptions, difficultyOptions } from "../../../constant/selecOptions";
import { useQuizStore } from "../../../context/useQuizStore";
import { useNavigate } from "react-router-dom";

const QuizAttribute = () => {
    const quizStore = useQuizStore(state => state);
    const navigate = useNavigate();

    const Schema = z.object({
        numberOfQuestions: z.string().min(1, "Number of Question is must be greater than 0"),
        category: z.string().min(1, "Category is required"),
        difficulty: z.string().min(1, "Difficulty is required"),
    })

    type FormSchemaType = z.infer<typeof Schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(Schema),
    });


    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        quizStore.setQuizAttributes(data);
        navigate('/overview')
    };


    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                name="numberOfQuestions"
                label="Number of Questions"
                register={register}
                errors={errors}
            />

            <Select
                name="category"
                label="Category"
                options={categoryOptions}
                register={register}
                errors={errors}
            />

            <Select
                name="difficulty"
                label="Difficulty"
                options={difficultyOptions}
                register={register}
                errors={errors}
            />

            <Button
                label="Finish"
                type="submit"
                color="Accent"
                width="Full"
                size="Medium"
            />
        </form>
    );
};

export default QuizAttribute;
