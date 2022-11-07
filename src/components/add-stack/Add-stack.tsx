import { ReactElement } from 'react';
import { Field, Formik } from 'formik';
import { ModalHeader } from '../modal-header/Modal-header';
import { OptionsOrGroups } from 'react-select/dist/declarations/src/types';
import { MySelect } from '../my-select/My-select';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addStack, selectStacks } from '../../store/reducers/Stack.reducer';
import { Dispatch } from 'redux';
import { Competency } from '../../interfaces/competency';
import { closeModal } from '../../store/reducers/Modal.reducer';

interface ModulesOption {
  value: any;
  label: string;
}

export function AddStack(): ReactElement {
  const dispatch: Dispatch = useAppDispatch();
  const initValues: Competency = { name: '', modules: [] };
  // TODO FIX WTF ERROR
  // const initValues: any = { name: '', modules: [] };
  const modulesOptions: OptionsOrGroups<ModulesOption, { options: ModulesOption[] }> =
    useAppSelector(selectStacks)
  .map((stack) => ([...stack.modules]))
  .flat()
  .map((module) => ({value: module, label: module.name}));

  function validate(values: Competency) {
    console.log('validation', values);
    const errors: Partial<Competency> = {};
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

  function onSubmit(value: any, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}): void {
    console.log('onSubmit', value);
    value.modules = value.modules.map((module: ModulesOption) => module.value);
    dispatch(addStack(value));
    dispatch(closeModal());
  }

  return (
    <div>
      <ModalHeader title={'Add stack'}></ModalHeader>
      <div className="add-stack">
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
              <label>Stack name</label>
              <input
                className="app__input"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.name}
              />
              {errors.name && touched.name && errors.name}
              <label>Stack modules</label>
              <Field
                name="modules"
                component={MySelect}
                defaultValue={[]}
                options={modulesOptions}
                onChange={handleChange}
                onBlur={handleBlur}
                isMulti
              />
              {/*{errors.modules && touched.modules && errors.modules}*/}
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
