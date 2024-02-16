import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { categoryOptions, difficultyOptions, typeOptions } from "../../../constant/selecOptions";

const QuizAttribute = () => {
    const Schema = z.object({
        numberOfQuestion: z.string().min(1, "Number of Question is must be greater than 0"),
        category: z.string().min(1, "Category is required"),
        difficulty: z.string().min(1, "Difficulty is required"),
        type: z.string().min(1, "Type is required"),
    })

    type FormSchemaType = z.infer<typeof Schema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(Schema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                name="numberOfQuestion"
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
                disabled={isSubmitting} 
            />
        </form>
    );
};

export default QuizAttribute;
