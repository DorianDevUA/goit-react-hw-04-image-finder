import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchBar,
  SearchField,
  SearchForm,
  StyledFaSearch,
} from './Searchbar.styled';
import { StyledIconBtn } from '../IconButton';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handelChange = evt => {
    const { value } = evt.target;
    this.setState({ search: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("press send Btn");

    this.props.onSearch(this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <SearchBar>
        <SearchForm>
          <StyledIconBtn
            onClick={this.handleSubmit}
            aria-label="Search by request"
          >
            <StyledFaSearch />
          </StyledIconBtn>
          <SearchField
            type="text"
            name="search"
            value={search}
            autoComplete="off"
            placeholder="Search images and photos"
            onChange={this.handelChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
