import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`} style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <Image src={imgSrc} layout="fill" objectFit="cover" priority alt='' />
    </div>
  );
};

export default DevImg;
