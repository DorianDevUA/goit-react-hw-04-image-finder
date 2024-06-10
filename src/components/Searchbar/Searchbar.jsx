import { Component } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { ButtonLabel, Header, SearchBtn, SearchField, SearchForm } from './Searchbar.styled';

const initialValues = {
  search: '',
};

export class Searchbar extends Component {
  handleSubmit = (values, actions) => {
    const { onSubmit } = this.props;
    const { search: searchQuery } = values;
    const { resetForm } = actions;

    onSubmit(searchQuery);
    resetForm();
  };

  render() {
    return (
      <Header>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <SearchForm>
            <SearchBtn type="submit" className="button">
              <ButtonLabel className="button-label">Search</ButtonLabel>
            </SearchBtn>

            <SearchField type="search" name="search" placeholder="Search..." />
            <ErrorMessage name="search" component="div" />
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
