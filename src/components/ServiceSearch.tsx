"use client"

import { Button, Input } from 'antd';
import React from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { CiLocationOn } from "react-icons/ci";


const { Search } = Input;


const ServiceSearch = () => {

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


  return (
    <div className="flex-start gap-5">
      <Button size='large'>
        <span className="!flex items-center justify-center gap-2 px-4">
          <CiLocationOn />
          <span className="font-bold">Gulshan 1</span>
        </span>
      </Button>
      <Search
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        placeholder="Search Service"
      />
    </div>
  );
};

export default ServiceSearch;