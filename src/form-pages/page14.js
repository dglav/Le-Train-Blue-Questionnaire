import React from "react";
import {
  Center,
  Stack,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
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

function Page14({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            desiredHairRemovalLocations:
              questionnaireState.desiredHairRemovalLocations,
            desiredHairRemovalLocationOther:
              questionnaireState.desiredHairRemovalLocationOther
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
                <Field name="desiredHairRemovalLocations">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.desiredHairRemovalLocations &&
                          form.touched.desiredHairRemovalLocations
                        }
                      >
                        <FormLabel htmlFor="desiredHairRemovalLocations">
                          どの部分を脱毛したいと思いますか？
                        </FormLabel>
                        <CheckboxGroup
                          onChange={value => {
                            form.setFieldValue(
                              "desiredHairRemovalLocations",
                              value
                            );
                            if (!field.value?.includes("その他"))
                              form.setFieldValue(
                                "desiredHairRemovalLocationOther",
                                undefined
                              );
                          }}
                          defaultValue={[]}
                        >
                          <Grid
                            templateRows="repeat(9, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                          >
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="脇">脇</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ひじ下">ひじ下</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ひじ上">ひじ上</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="手の甲指">手の甲指</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ひざ下">ひざ下</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ひざ上">ひざ上</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="足の甲指">足の甲指</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="うなじ">うなじ</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="背中上">背中上</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="背中下">背中下</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="胸">胸</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="お腹">お腹</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="顔">顔</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="Vライン">Vライン</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="Iライン">Iライン</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="Oライン">Oライン</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="その他">その他</Checkbox>
                            </GridItem>
                          </Grid>
                        </CheckboxGroup>
                        <FormErrorMessage>
                          {form.errors.desiredHairRemovalLocations}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="desiredHairRemovalLocationOther">
                  {({ field, form }) => {
                    const isdesiredHairRemovalLocationOtherVisible = !!form
                      .getFieldProps("desiredHairRemovalLocations")
                      .value?.includes("その他");

                    return (
                      isdesiredHairRemovalLocationOtherVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.desiredHairRemovalLocationOther &&
                            form.touched.desiredHairRemovalLocationOther
                          }
                        >
                          <FormLabel htmlFor="desiredHairRemovalLocationOther">
                            その他
                          </FormLabel>
                          <Input
                            {...field}
                            id="desiredHairRemovalLocationOther"
                            placeholder="その他"
                          />
                          <FormErrorMessage>
                            {form.errors.desiredHairRemovalLocationOther}
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

export default Page14;
