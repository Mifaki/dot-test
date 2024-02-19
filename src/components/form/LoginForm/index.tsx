import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../services/UserLogin";

const LoginForm = () => {
    const navigate = useNavigate();

    const Schema = z.object({
        username: z.string().min(1, "Number of Question is must be greater than 0"),
        password: z.string().min(1, "Category is required"),
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
        try {
            await userLogin(data.username, data.password);
            navigate('/');            
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                name="username"
                label="Username"
                register={register}
                errors={errors}
            />

            <Input
                name="password"
                label="Password"
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

export default LoginForm;
