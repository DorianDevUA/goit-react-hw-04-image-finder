import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar';
import { fetchImages } from '../../services';
import { ImageGallery } from '../ImageGallery';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { DNA } from 'react-loader-spinner';

export class App extends Component {
  state = {
    gallery: [],
    searchRequest: '',
    isLoading: false,
  };

  componentDidMount() {}

  // componentDidUpdate приймає 3 параметри "prevProps", "prevState", необовязковий "snapshot".)
  async componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.searchRequest;
    const currentRequest = this.state.searchRequest;

    if (prevRequest !== currentRequest) {
      console.log('Відбулася зміна запиту');
      this.setState({ isLoading: true });
      const response = await fetchImages(currentRequest);
      this.setState({ gallery: response.hits, isLoading: false });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getSearchQuery = searchRequest => {
    this.setState({ searchRequest });
  };

  render() {
    const { gallery, isLoading } = this.state;
    console.log('gallery', gallery);

    return (
      <Container>
        <Searchbar onSearch={this.getSearchQuery} />
        {gallery.length > 0 && (
          <>
            <ImageGallery gallery={gallery} onClose={this.toggleModal} />
            <Button />
          </>
        )}
        {isLoading && (
          <>
            <Loader />
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </>
        )}
      </Container>
    );
  }
}
