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

const PersonalDetail = () => {

  const BASE_URL = "http://127.0.0.1:8000/profile/user/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const submitHandler = (data) => {
    
    navigate("/cart/personalDetails/address");
    console.log(data);

    try {
        const response =  axios.post(BASE_URL,
            {
             first_name: data.firstName,
             last_name : data.lastName,
             email :data.email,
             phone_number : data.number   
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
          <CardHeading>Personal Detail</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              register={register}
              required
              minLength={4}
            />
          </CardFieldset>
          {errors.firstName &&
            <p className="text-[red] text-[10px]">Please Enter First Name</p>
          }

          <CardFieldset>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              register={register}
              required
              minLength={4}
            />
          </CardFieldset>
          {errors.lastName && 
            <p className="text-[red] text-[10px]">Please Enter Last Name</p>
          }

          <CardFieldset>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
              register={register}
              required
            />
          </CardFieldset>
          {errors.email && 
            <p className="text-[red] text-[10px]">Please check the Email</p>
          }

          <CardFieldset >
            <Input
              type="number"
              name="number"
              placeholder="Enter Mobile Number"
              register={register}
              required
              maxLength={10}
              minLength={10}
              pattern={"/^(0|[1-9]\d*)(\.\d+)?$/"}
            />
          </CardFieldset>
          {errors.number  && <p className="text-[red] text-[10px]">Please Enter Mobile Number</p>}
          
          <CardFieldset>
            <CardButton type="submit" className="mt-[30px]">
              Next
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </form>
  );
}

export default PersonalDetail;
