import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/organisms/Header";
import NameFields from "../components/molecules/NameFields";
import BirthdateInput from "../components/molecules/BirthdateField";
import AddressFields from "../components/molecules/AddressFields";
import PhoneNumberFields from "../components/molecules/PhoneNumberFields";
import EmailField from "../components/molecules/EmailField";
import WorkFields from "../components/molecules/WorkFields";
import TextMessagePermissionField from "../components/molecules/TextMessagePermissionField";
import FormNavigationButtons from "../components/molecules/FormNavigationButtons";

function PersonalInfoForm({ questionnaireState, onSubmit, goToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            nameFurigana: questionnaireState.nameFurigana,
            name: "",
            birthdate: { year: undefined, month: undefined, day: undefined },
            address: "",
            addressFurigana: "",
            homePhoneNumber: "",
            cellPhoneNumber: "",
            email: "",
            placeOfWork: "",
            industry: "",
            hasPermissionToDM: "",
            contactMethod: "",
            contactMethodOther: ""
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
                <NameFields />
                <BirthdateInput />
                <AddressFields />
                <PhoneNumberFields />
                <EmailField />
                <WorkFields />
                <TextMessagePermissionField />
              </Stack>
              <FormNavigationButtons
                onSubmit={onSubmit}
                goToPreviousPage={goToPreviousPage}
                isLoading={props.isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default PersonalInfoForm;
