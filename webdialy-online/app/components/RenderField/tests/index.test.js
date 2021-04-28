import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { reduxForm, Field } from 'redux-form';

import history from 'utils/history';
import configureStore from 'configureStore';

import RenderField from '../index';
import CheckboxInput from '../CheckboxInput';
import DateInput from '../DateInput';
import DateTimeInput from '../DateTimeInput';
import FileInput from '../FileInput';
import Select from '../Select';

const initialState = {};

const store = configureStore(initialState, history);

describe('RenderField components', () => {
  it('RenderField snapshot', () => {
    const TestForm = () => (
      <form>
        <Field name="inputName" component={RenderField} type="text" margin="normal" value="test" />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CheckboxInput snapshot', () => {
    const TestForm = () => (
      <form>
        <Field
          name="inputName"
          component={CheckboxInput}
          type="text"
          margin="normal"
          value="test"
        />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('DateInput snapshot', () => {
    const TestForm = () => (
      <form>
        <Field name="inputName" component={DateInput} type="text" margin="normal" value="test" />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('DateTimeInput snapshot', () => {
    const TestForm = () => (
      <form>
        <Field
          name="inputName"
          component={DateTimeInput}
          type="text"
          margin="normal"
          value="test"
        />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FileInput snapshot', () => {
    const TestForm = () => (
      <form>
        <Field name="inputName" component={FileInput} type="text" margin="normal" value="test" />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Select snapshot', () => {
    const TestForm = () => (
      <form>
        <Field name="inputName" component={Select} type="text" margin="normal" value="test" />
      </form>
    );
    const ReduxSimpleForm = reduxForm({ form: 'newForm' })(TestForm);

    const component = renderer.create(
      <Provider store={store}>
        <ReduxSimpleForm />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
