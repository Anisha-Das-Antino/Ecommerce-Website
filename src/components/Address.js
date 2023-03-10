import React from "react";
import Input from "./Input";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardButton,
} from "../components/Authentic/Styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Address = () => {

  const BASE_URL="https://a522-2401-4900-1cbd-f9a6-d9c3-2646-5ce8-316.in.ngrok.io/profile/address/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const submitHandler = (data) => {

    navigate("/payment");
    console.log(data);

    try {
        const response =  axios.post(BASE_URL,
            {
                street : data.landmark,
                city:data.city,
                state:data.state,
                zip_code : data.pinCode
            });
        console.log("response");
        console.log(response.data.status);
        if (response.data.status === 200) {
            navigate("/cart/personalDetails/address");
        }

    }
    catch (e) {
        console.log(errors);
    }
  };

  return (
    
    <form onSubmit={handleSubmit(submitHandler)}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Address</CardHeading>
        </CardHeader>

        <CardBody>

          <CardFieldset>
            <Input
              type="text"
              name="landmark"
              placeholder="Landmark"
              register={register}
              required
            />
          </CardFieldset>
          {errors.landmark && 
            <p className="text-[red] text-[10px]">Please Enter Landmark</p>
          }

          <CardFieldset>
          <Input
              type="text"
              name="state"
              placeholder="State"
              register={register}
              required
              minLength={4}
            />
          </CardFieldset>
          {errors.state && <p className="text-[red] text-[10px]">Please Enter State Name</p>}

          <CardFieldset>
          <Input
              type="text"
              name="city"
              placeholder="City"
              register={register}
              required
              minLength={4}
            />
          </CardFieldset>
          {errors.city && <p className="text-[red] text-[10px]">Please Enter City Name</p>}


          <CardFieldset>
            <Input
              type="number"
              name="pinCode"
              placeholder="Enter Pin Code"
              register={register}
              required
              maxLength={6}
              minLength={6}
            />
          </CardFieldset>

          {errors.pinCode && <p className="text-[red] text-[10px]">Please Enter Pin Code</p>}

          <CardFieldset>
            <CardButton type="submit" className="mt-[30px]">
              Proceed to Pay 
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </form>
 );
}

export default Address;
