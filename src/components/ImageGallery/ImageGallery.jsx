import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImgsAPI } from 'services';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const imgsAPI = new ImgsAPI();

export class ImageGallery extends Component {
  static propTypes = {
    imgName: PropTypes.string.isRequired,
  };

  state = {
    images: [],
  };

  async componentDidUpdate(prevProps) {
    const prevImgName = prevProps.imgName;
    const nextImgName = this.props.imgName;

    if (nextImgName !== prevImgName) {
      try {
        const data = await imgsAPI.getImgs(nextImgName);
        this.setState({ images: data.hits });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { images } = this.state;
    return (
      <Gallery>
        {images.map(({ id, tags, largeImageURL }) => (
          <ImageGalleryItem key={id} descr={tags} imgUrl={largeImageURL} />
        ))}
      </Gallery>
    );
  }
}

// collections: 2355;
// comments: 573;
// downloads: 630684;
// id: 736877;
// imageHeight: 1282;
// imageSize: 97150;
// imageWidth: 1920;
// largeImageURL: 'https://pixabay.com/get/g99a8f0f263df0cb0e4714fd9033344607d27fd7336c2085105d78fa46f074f6d6363cceb85e9ff4522d5f28bbb9ed73ecbcd60ff0fe10651610406b9c401c49e_1280.jpg';
// likes: 2842;
// pageURL: 'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/';
// previewHeight: 100;
// previewURL: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg';
// previewWidth: 150;
// tags: 'tree, cat, silhouette';
// type: 'photo';
// user: 'Bessi';
// userImageURL: 'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg';
// user_id: 909086;
// views: 1242702;
// webformatHeight: 427;
// webformatURL: 'https://pixabay.com/get/g0a271d71bf73125f3fb9d4ca78b6a43f05c8bfa162ec6731bff4c260005dc6a4acbb607060feb832062330dbd2f8e256_640.jpg';
// webformatWidth: 640;
