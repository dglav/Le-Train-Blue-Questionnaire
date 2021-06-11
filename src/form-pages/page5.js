import React from "react";
import {
  Center,
  Stack,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonGroup,
  Input
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page5({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            isTakingMedicine: questionnaireState.isTakingMedicine,
            medicinePurpose: questionnaireState.medicinePurpose,
            medicineName: questionnaireState.medicineName
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              actions.setSubmitting(false);
              onSubmit(values);
            }, 200);
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Stack spacing="3" w="500px">
                <Field name="isTakingMedicine">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.isTakingMedicine &&
                          form.touched.isTakingMedicine
                        }
                      >
                        <FormLabel htmlFor="isTakingMedicine">
                          服用されている、もしくはたまに服用するお薬はありますか？
                        </FormLabel>
                        <ButtonGroup
                          isAttached
                          d="flex"
                          justifyContent="center"
                          colorScheme="blue"
                        >
                          <Button
                            onClick={() =>
                              form.setFieldValue("isTakingMedicine", true)
                            }
                            width="50%"
                            variant={field.value ? "solid" : "outline"}
                          >
                            はい
                          </Button>
                          <Button
                            onClick={() => {
                              form.setFieldValue("isTakingMedicine", false);
                              form.setFieldValue("medicinePurpose", undefined);
                              form.setFieldValue("medicineName", undefined);
                            }}
                            width="50%"
                            variant={
                              !field.value && field.value !== undefined
                                ? "solid"
                                : "outline"
                            }
                          >
                            いいえ
                          </Button>
                        </ButtonGroup>
                        <FormErrorMessage>
                          {form.errors.isTakingMedicine}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="medicinePurpose">
                  {({ form }) => {
                    const isMedicinePurposeVisible =
                      form.getFieldProps("isTakingMedicine").value === true;

                    return (
                      isMedicinePurposeVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.medicinePurpose &&
                            form.touched.medicinePurpose
                          }
                        >
                          <FormLabel htmlFor="medicinePurpose">
                            お薬の種類
                          </FormLabel>
                          <CheckboxGroup
                            onChange={value => {
                              form.setFieldValue("medicinePurpose", value);
                            }}
                            defaultValue={[]}
                          >
                            <Grid
                              templateRows="repeat(3, 1fr)"
                              templateColumns="repeat(2, 1fr)"
                            >
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="風邪薬">風邪薬</Checkbox>
                              </GridItem>
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="抗生物質">抗生物質</Checkbox>
                              </GridItem>
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="アレルギー抑制剤">
                                  アレルギー抑制剤
                                </Checkbox>
                              </GridItem>
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="精神安定剤">
                                  精神安定剤
                                </Checkbox>
                              </GridItem>
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="利尿財">利尿財</Checkbox>
                              </GridItem>
                              <GridItem rowSpan={1} colSpan={1}>
                                <Checkbox value="その他">その他</Checkbox>
                              </GridItem>
                            </Grid>
                          </CheckboxGroup>
                          <FormErrorMessage>
                            {form.errors.medicinePurpose}
                          </FormErrorMessage>
                        </FormControl>
                      )
                    );
                  }}
                </Field>
                <Field name="medicineName">
                  {({ field, form }) => {
                    const isMedicineNameVisible =
                      form.getFieldProps("isTakingMedicine").value === true;
                    return (
                      isMedicineNameVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.medicineName &&
                            form.touched.medicineName
                          }
                        >
                          <FormLabel htmlFor="medicineName">薬名</FormLabel>
                          <Input
                            {...field}
                            id="medicineName"
                            placeholder="薬名"
                          />
                          <FormErrorMessage>
                            {form.errors.medicineName}
                          </FormErrorMessage>
                        </FormControl>
                      )
                    );
                  }}
                </Field>
              </Stack>
              <FormNavigationButtons
                onSubmit={onSubmit}
                handleGoToPreviousPage={handleGoToPreviousPage}
                isLoading={props.isSubmitting}
                values={props.values}
              />
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default Page5;
