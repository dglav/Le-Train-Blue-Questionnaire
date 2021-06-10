import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";
import SelectNumber from "../components/SelectNumber";

const PreviousHairRemovalTimePeriodFinishField = () => {
  return (
    <Field name="previousHairRemovalTimePeriodFinish">
      {({ field, form }) => {
        const { year, month } = field.value;
        return (
          <FormControl
            isInvalid={
              form.errors.previousHairRemovalTimePeriodFinish &&
              form.touched.previousHairRemovalTimePeriodFinish
            }
          >
            <FormLabel htmlFor="previousHairRemovalTimePeriodFinish">
              脱毛を終了した頃
            </FormLabel>
            <Flex id="previousHairRemovalTimePeriodFinish">
              <SelectNumber
                firstNumber={1900}
                lastNumber={2021}
                placeholder="年"
                value={year}
                onChange={value =>
                  form.setFieldValue(field.name, {
                    ...field.value,
                    year: value
                  })
                }
              />

              <SelectNumber
                firstNumber={1}
                lastNumber={12}
                placeholder="月"
                value={month}
                onChange={value =>
                  form.setFieldValue(field.name, {
                    ...field.value,
                    month: value
                  })
                }
              />
            </Flex>
            <FormErrorMessage>
              {form.errors.previousHairRemovalTimePeriodFinish}
            </FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default PreviousHairRemovalTimePeriodFinishField;
