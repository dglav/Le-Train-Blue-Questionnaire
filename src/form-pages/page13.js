import React from "react";
import { Center, Stack, Text, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";
import SelfCareGroup from "../fields/SelfCareGroup";

function Page13({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            selfCareShaving: questionnaireState.selfCareShaving,
            selfCareShavingFromWhen: questionnaireState.selfCareShavingFromWhen,
            selfCareShavingWhere: questionnaireState.selfCareShavingWhere,
            selfCareShavingFrequency:
              questionnaireState.selfCareShavingFrequency,
            selfCareWiping: questionnaireState.selfCareWiping,
            selfCareWipingFromWhen: questionnaireState.selfCareWipingFromWhen,
            selfCareWipingWhere: questionnaireState.selfCareWipingWhere,
            selfCareWipingFrequency: questionnaireState.selfCareWipingFrequency,
            selfCareBleaching: questionnaireState.selfCareBleaching,
            selfCareBleachingFromWhen:
              questionnaireState.selfCareBleachingFromWhen,
            selfCareBleachingWhere: questionnaireState.selfCareBleachingWhere,
            selfCareBleachingFrequency:
              questionnaireState.selfCareBleachingFrequency,
            selfCareElectricHairRemoval:
              questionnaireState.selfCareElectricHairRemoval,
            selfCareElectricHairRemovalFromWhen:
              questionnaireState.selfCareElectricHairRemovalFromWhen,
            selfCareElectricHairRemovalWhere:
              questionnaireState.selfCareElectricHairRemovalWhere,
            selfCareElectricHairRemovalFrequency:
              questionnaireState.selfCareElectricHairRemovalFrequency,
            selfCareOther: questionnaireState.selfCareOther,
            selfCareOtherFromWhen: questionnaireState.selfCareOtherFromWhen,
            selfCareOtherWhere: questionnaireState.selfCareOtherWhere,
            selfCareOtherFrequency: questionnaireState.selfCareOtherFrequency
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              actions.setSubmitting(false);
              onSubmit(values);
            }, 200);
          }}
        >
          {props => (
            <VStack align="left">
              <Text>今までどのような処理を行ってきましたか？</Text>
              <Form onSubmit={props.handleSubmit}>
                <Stack spacing="3" w="500px">
                  <SelfCareGroup
                    yesNoFieldName="selfCareShaving"
                    yesText="剃る"
                    noText="剃らない"
                    fromWhen="selfCareShavingFromWhen"
                    where="selfCareShavingWhere"
                    frequency="selfCareShavingFrequency"
                  />
                  <SelfCareGroup
                    yesNoFieldName="selfCareWiping"
                    yesText="拭く"
                    noText="拭かない"
                    fromWhen="selfCareWipingFromWhen"
                    where="selfCareWipingWhere"
                    frequency="selfCareWipingFrequency"
                  />
                  <SelfCareGroup
                    yesNoFieldName="selfCareBleaching"
                    yesText="脱色する"
                    noText="脱色しない"
                    fromWhen="selfCareBleachingFromWhen"
                    where="selfCareBleachingWhere"
                    frequency="selfCareBleachingFrequency"
                  />
                  <SelfCareGroup
                    yesNoFieldName="selfCareElectricHairRemoval"
                    yesText="電気脱毛する"
                    noText="電気脱毛しない"
                    fromWhen="selfCareElectricHairRemovalFromWhen"
                    where="selfCareElectricHairRemovalWhere"
                    frequency="selfCareElectricHairRemovalFrequency"
                  />
                  <SelfCareGroup
                    yesNoFieldName="selfCareOther"
                    yesText="その他する"
                    noText="その他しない"
                    fromWhen="selfCareOtherFromWhen"
                    where="selfCareOtherWhere"
                    frequency="selfCareOtherFrequency"
                  />
                </Stack>
                <FormNavigationButtons
                  onSubmit={onSubmit}
                  handleGoToPreviousPage={handleGoToPreviousPage}
                  isLoading={props.isSubmitting}
                  values={props.values}
                />
              </Form>
            </VStack>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default Page13;
