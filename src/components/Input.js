import { CardInput } from "../Authentic/Styles";
const Input = ({
    name,
    type,
    placeholder,
    register,
}) => {

    return (
        <>      <CardInput
            placeholder={placeholder}
            name={name}
            type={type}

            {...(register && register(`${name}`))}
        />
        </>);
};
export default Input;