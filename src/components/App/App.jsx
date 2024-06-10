import { Component } from 'react';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Loader } from '../Loader';
import { Button } from '../Button';
import { Wrapper } from './App.styled';
import { fetchGallery } from '../../services';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    error: '',
    page: 1,
    totalHits: 0,
    isLoading: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;

    if (prevQuery !== searchQuery) {
      console.log('Змінився пошуковий запит, робимо fetch!');
      this.setState({ images: [], page: 1, isLoading: true, totalHits: 0 });

      try {
        const { hits: images, totalHits } = await fetchGallery(searchQuery);
        this.setState({ images, totalHits });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleLoadMore = async () => {
    const { searchQuery, page } = this.state;
    const nextPage = page + 1;
    this.setState({ page: nextPage, isLoading: true });

    try {
      const { hits: newImages } = await fetchGallery(searchQuery, nextPage);
      this.setState(({ images: prevImages }) => ({
        images: [...prevImages, ...newImages],
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { images, isLoading, totalHits } = this.state;
    const isImagesExist = images.length > 0;
    const isLastPage = images.length >= totalHits;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.getSearchQuery} />

        {isImagesExist && <ImageGallery images={images} />}

        {isLoading && <Loader />}
        {isImagesExist && !isLastPage && (
          <Button onClick={this.handleLoadMore} />
        )}
      </Wrapper>
    );
  }
}
