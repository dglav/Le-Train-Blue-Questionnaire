import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalTimePeriodCountField = () => {
  return (
    <Field name="previousHairRemovalTimePeriodCount">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalTimePeriodCount &&
            form.touched.previousHairRemovalTimePeriodCount
          }
        >
          <FormLabel htmlFor="previousHairRemovalTimePeriodCount">
            脱毛した回数
          </FormLabel>
          <Input
            {...field}
            id="previousHairRemovalTimePeriodCount"
            placeholder="回数"
          />
          <FormErrorMessage>
            {form.errors.previousHairRemovalTimePeriodCount}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalTimePeriodCountField;
