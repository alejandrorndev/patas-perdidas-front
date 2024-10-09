import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom' 
import { products } from '../products';

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])

  return (
    <div>
      <div style={{ height: '2rem' }}></div>
        <h2 className='text-3xl text-center'>DETALLE</h2>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            <div>
                <img src={detail.image} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
                <p className='font-bold text-3xl'>
                    ${detail.price}
                </p>
                <p>
                    {detail.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Detail