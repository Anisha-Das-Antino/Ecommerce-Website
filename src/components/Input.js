import { CardInput } from "./Authentic/Styles";
const Input = ({
    name,
    type,
    placeholder,
    register,
    required, 
    maxLength,
    minLength,
    pattern
}) => {

    return (
        <>      <CardInput
            placeholder={placeholder}
            name={name}
            type={type}
            
            {...(register && register(`${name}` , { required: required ? true: false , maxLength:maxLength?maxLength:null, minLength:minLength?minLength:null}, {pattern:pattern ? pattern: null}  ))}
        />
        </>);
};
export default Input;