import React from "react";
import { RadioGroup, Radio, Grid, GridItem } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalMethodField = () => {
  return (
    <Field name="previousHairRemovalMethod">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalMethod &&
            form.touched.previousHairRemovalMethod
          }
        >
          <FormLabel htmlFor="previousHairRemovalMethod">
            脱毛方法は？
          </FormLabel>
          <RadioGroup
            onChange={value => {
              form.setFieldValue(field.name, value);
            }}
            value={field.value}
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(4, 1fr)"
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Radio value="光脱毛">光脱毛</Radio>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Radio value="医療レーザー">医療レーザー</Radio>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Radio value="ニードル">ニードル</Radio>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Radio value="その他">その他</Radio>
              </GridItem>
            </Grid>
          </RadioGroup>
          <FormErrorMessage>
            {form.errors.previousHairRemovalMethod}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalMethodField;
