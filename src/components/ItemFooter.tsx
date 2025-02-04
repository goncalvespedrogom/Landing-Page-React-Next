import React from 'react';

interface ItemFooterProps {
  Links: { name: string; link: string }[];
  title: string;
}

const ItemFooter: React.FC<ItemFooterProps> = ({ Links, title }) => {
  return (
    <div>
      <h3 className='mb-1 font-semibold'>{title}</h3>
      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <a className='text-txt-gray hover:text-second-green duration-300 text-sm cursor-pointer leading-6' href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemFooter;
