import { navData } from '@/data/navdata';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-light">
      <div className="navbar">
        <div className="flex justify-start items-end gap-5">
          <Link href="/" className="text-4xl font-semibold text-primary">Logo</Link>
          <button className="flex-start gap-2"><CiLocationOn /> Gulshan, Dhaka</button>
        </div>
        <ul>
          {
            navData.map((item: any, i: number) => {
              return (
                <li key={i}>
                  <Link href="/">{item?.label}</Link>
                </li>
              )
            })
          }
          <li>
            <Button type="primary">Login</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;