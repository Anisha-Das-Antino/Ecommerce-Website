import { CardInput } from "./Authentic/Styles";
const Input = ({
    name,
    type,
    placeholder,
    register,
    required
}) => {

    return (
        <>      <CardInput
            placeholder={placeholder}
            name={name}
            type={type}
            
            {...(register && register(`${name}` , { required: required ? true: false }  ))}
        />
        </>);
};
export default Input;