import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from 'formik';
import {
  ButtonLabel,
  Header,
  SearchBtn,
  SearchField,
  SearchForm,
} from './Searchbar.styled';

const initialValues = {
  search: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const { search: searchQuery } = values;
    const { resetForm } = actions;

    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
