import React from "react";
import {
  Input,
  RadioGroup,
  Stack,
  Radio,
  Grid,
  GridItem
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const WorkFields = () => {
  return (
    <>
      <Field name="placeOfWork">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.placeOfWork && form.touched.placeOfWork}
          >
            <FormLabel htmlFor="placeOfWork">勤務先</FormLabel>
            <Input {...field} id="placeOfWork" placeholder="勤務先" />
            <FormErrorMessage>{form.errors.placeOfWork}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="industry">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.industry && form.touched.industry}
          >
            <FormLabel htmlFor="industry">職業</FormLabel>
            <RadioGroup
              onChange={value => form.setFieldValue(field.name, value)}
              value={field.value}
            >
              <Stack direction="row" d="flex" flexDir="column">
                <Grid
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(3, 1fr)"
                >
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="会社員">会社員</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="自業">自業</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="パート">パート</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="アルバイト">アルバイト</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="主婦">主婦</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="学生">学生</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="家庭手伝い">家庭手伝い</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="無職">無職</Radio>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Radio value="その他">その他</Radio>
                  </GridItem>
                </Grid>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{form.errors.industry}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default WorkFields;
