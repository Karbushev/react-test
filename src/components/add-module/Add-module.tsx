import { ModalHeader } from '../modal-header/Modal-header';
import { Field, Formik } from 'formik';
import { MySelect } from '../my-select/My-select';
import { OptionsOrGroups } from 'react-select/dist/declarations/src/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CompetencyModule } from '../../interfaces/competency-module';
import { ReactElement } from 'react';
import { addModule, selectStacks } from '../../store/reducers/Stack.reducer';
import { closeModal } from '../../store/reducers/Modal.reducer';

interface ModulesOption {
  value: any;
  label: string;
}

interface AddModuleForm extends CompetencyModule {
  stackName: {
    value: string;
    label: string;
  }
}

export function AddModule(): ReactElement {
  const dispatch = useAppDispatch();
  // const initValues: CompetencyModule = { name: '', competency: '', sections: [] };
  const initValues: AddModuleForm = { name: '', competency: '', sections: [], stackName: { value: '', label: '' } };
  const moduleCompetencyOptions: OptionsOrGroups<ModulesOption, { options: ModulesOption[] }> = useAppSelector(selectStacks)
    .map((stack) =>
      ({
        value: stack.name,
        label: stack.name,
      }),
    );

  function validate(values: CompetencyModule) {
    const errors: Partial<CompetencyModule> = {};
    console.log('values', values);
    if (!values.name) {
      errors.name = 'Required';
    }
    // if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
    // ) {
    //   errors.name = 'Invalid email address';
    // }
    return errors;
  }

  function onSubmit(values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) {
    console.log('onSubmit', values);

    dispatch(addModule(values));
    dispatch(closeModal());
  }

  return (
    <div>
      <ModalHeader title={'Add module'}></ModalHeader>
      <div className="add-module">
        <Formik
          initialValues={initValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit}>
              <label>Module name</label>
              <input
                className="app__input"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.name}
              />
              {errors.name && touched.name && errors.name}
              <label>Module competency</label>
              <Field
                name="stackName"
                component={MySelect}
                defaultValue={[]}
                options={moduleCompetencyOptions}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/*{errors.stackName && touched.stackName && errors.stackName}*/}
              <button
                className="modal__button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
