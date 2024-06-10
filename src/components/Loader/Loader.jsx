import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export function Loader() {
  return (
    <Container>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
}
