import React from "react";
import {
  Input,
  Select,
  Box,
  RadioGroup,
  SimpleGrid,
  Radio
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const TextMessagePermissionField = () => {
  return (
    <>
      <Field name="hasPermissionToDM">
        {({ field, form }) => (
          <FormControl
            isInvalid={
              form.errors.hasPermissionToDM && form.touched.hasPermissionToDM
            }
          >
            <FormLabel htmlFor="hasPermissionToDM">DM</FormLabel>
            <Select
              id="hasPermissionToDM"
              onChange={e => {
                form.setFieldValue(field.name, e.target.value);
                const shouldResetChildFields = field.value !== "不可";
                if (shouldResetChildFields) {
                  form.setFieldValue("contactMethod", "");
                  form.setFieldValue("contactMethodOther", "");
                }
              }}
              value={field.value}
              placeholder=" "
            >
              <option value="可">可</option>
              <option value="不可">不可</option>
            </Select>
            <FormErrorMessage>{form.errors.hasPermissionToDM}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="contactMethod">
        {({ field, form }) => {
          const isContactMethodFieldVisible =
            form.getFieldProps("hasPermissionToDM").value === "可";
          return (
            isContactMethodFieldVisible && (
              <FormControl
                isInvalid={
                  form.errors.contactMethod && form.touched.contactMethod
                }
              >
                <FormLabel htmlFor="contactMethod">連絡先</FormLabel>
                <Box id="contactMethod">
                  <RadioGroup
                    onChange={value => {
                      form.setFieldValue(field.name, value);
                      const shouldResetContactMethodOtherField =
                        field.value !== "その他";
                      if (shouldResetContactMethodOtherField)
                        form.setFieldValue("contactMethodOther", "");
                    }}
                    value={field.value}
                  >
                    <SimpleGrid rows={1} columns={3}>
                      <Radio value="自宅">自宅</Radio>
                      <Radio value="勤務先">勤務先</Radio>
                      <Radio value="その他">その他</Radio>
                    </SimpleGrid>
                  </RadioGroup>
                </Box>
                <FormErrorMessage>{form.errors.contactMethod}</FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
      <Field name="contactMethodOther">
        {({ field, form }) => {
          const isContactMethodOtherFieldVisible =
            form.getFieldProps("hasPermissionToDM").value === "可" &&
            form.getFieldProps("contactMethod").value === "その他";
          return (
            isContactMethodOtherFieldVisible && (
              <FormControl
                isInvalid={
                  form.errors.contactMethodOther &&
                  form.touched.contactMethodOther
                }
              >
                <FormLabel htmlFor="contactMethodOther"></FormLabel>
                <Input
                  {...field}
                  id="contactMethodOther"
                  placeholder="その他"
                />
                <FormErrorMessage>
                  {form.errors.contactMethodOther}
                </FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
    </>
  );
};

export default TextMessagePermissionField;
