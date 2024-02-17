import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { categoryOptions, difficultyOptions, typeOptions } from "../../../constant/selecOptions";
import { useQuizStore } from "../../../context/useQuizStore";
import { useNavigate } from "react-router-dom";

const QuizAttribute = () => {
    const quizStore = useQuizStore(state => state);
    const zustandnumberOfQuestionss = useQuizStore(state => state.numberOfQuestions)
    const zustandcategoryy = useQuizStore(state => state.category)
    const zustanddifficultyy = useQuizStore(state => state.difficulty)
    const zustandtypee = useQuizStore(state => state.type)
    const navigate = useNavigate();

    const Schema = z.object({
        numberOfQuestions: z.string().min(1, "Number of Question is must be greater than 0"),
        category: z.string().min(1, "Category is required"),
        difficulty: z.string().min(1, "Difficulty is required"),
        type: z.string().min(1, "Type is required"),
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
            console.log(data);
            quizStore.setQuizAttributes(data); 
            navigate('/overview')
    };
    

    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <p>number of question: {zustandnumberOfQuestionss}</p>
            <p>category: {zustandcategoryy}</p>
            <p>dificuilty: {zustanddifficultyy}</p>
            <p>type: {zustandtypee}</p>
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

            <Select
                name="type"
                label="Type"
                options={typeOptions}
                register={register}
                errors={errors}
            />

            <Button
                label="Finnish"
                type="submit"
                color="Accent"
                width="Full"
                size="Medium"
            />
        </form>
    );
};

export default QuizAttribute;
