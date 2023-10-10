import { useParams } from 'react-router-dom';
import Header from '../MainPage/Header/Header';

const DetailProduct = ({ products }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>This product does not exist</div>;
  }

  return (
    <>
      <Header />
      <div className='detailProduct'>
        <h1 className='detailProduct_title'>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className='detailProduct_image'
        />
        <p className='detailProduct_description'>{product.description}</p>
        <p className='detailProduct_price'>{product.price} €</p>
      </div>
    </>
  );
};

export default DetailProduct;
