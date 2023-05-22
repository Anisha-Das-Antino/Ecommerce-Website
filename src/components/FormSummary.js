import React from "react";
import { Typography } from "@material-ui/core";

const FormSummary = ({ formData }) => {
  return (
    <div>
      <Typography variant="h4" align="center">
        Order Summary
      </Typography>

      <Typography variant="h6">Basic Information:</Typography>
      <Typography>{`First Name: ${formData.firstName}`}</Typography>
      <Typography>{`Last Name: ${formData.lastName}`}</Typography>

      <Typography variant="h6">Contact Information:</Typography>
      <Typography>{`Email Address: ${formData.emailAddress}`}</Typography>
      <Typography>{`Phone Number: ${formData.phoneNumber}`}</Typography>
      <Typography>{`Alternate Phone: ${formData.alternatePhone}`}</Typography>

      <Typography variant="h6">Address Details:</Typography>
      <Typography>{`Address 1: ${formData.address1}`}</Typography>
      <Typography>{`Address 2: ${formData.address2}`}</Typography>
      <Typography>{`Country: ${formData.country}`}</Typography>
      <Typography>{`City: ${formData.city}`}</Typography>
      <Typography>{`Zip Code: ${formData.zipcode}`}</Typography>

    </div>
  );
};

export default FormSummary;
