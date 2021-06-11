import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/Header";
import NameFields from "../fields/NameFields";
import BirthDateInput from "../fields/BirthDateField";
import AddressFields from "../fields/AddressFields";
import PhoneNumberFields from "../fields/PhoneNumberFields";
import EmailField from "../fields/EmailField";
import WorkFields from "../fields/WorkFields";
import TextMessagePermissionField from "../fields/TextMessagePermissionField";
import FormNavigationButtons from "../components/FormNavigationButtons";

function PersonalInfoForm({ questionnaireState, onSubmit, goToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            nameFurigana: questionnaireState.nameFurigana || "",
            name: questionnaireState.name || "",
            birthDate: questionnaireState.birthDate || {
              year: undefined,
              month: undefined,
              day: undefined
            },
            address: questionnaireState.address || "",
            addressFurigana: questionnaireState.addressFurigana || "",
            homePhoneNumber: questionnaireState.homePhoneNumber || "",
            cellPhoneNumber: questionnaireState.cellPhoneNumber || "",
            email: questionnaireState.email || "",
            placeOfWork: questionnaireState.placeOfWork || "",
            industry: questionnaireState.industry || "",
            hasPermissionToDM: questionnaireState.hasPermissionToDM || "",
            contactMethod: questionnaireState.contactMethod || "",
            contactMethodOther: questionnaireState.contactMethodOther || ""
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
                <BirthDateInput />
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
