import React from 'react';

interface PropsType {
  item: {
    icon: JSX.Element,
    categoryName: string,
  }
}

const ServiceCategoryCard: React.FC<PropsType> = ({ item }) => {
  return (
    <button className="group bg-white flex-center flex-col shadow-md rounded-md border border-primary-100 p-4 hover:border-primary hover:shadow-xl transition ease-in-out duration-300">
      <span className="text-4xl text-center text-dark group-hover:text-primary group-hover:scale-125 transition ease-in-out duration-300">
        {item?.icon}
      </span>
      <span className='group-hover:text-primary'>{item?.categoryName}</span>
    </button>
  );
};

export default ServiceCategoryCard;