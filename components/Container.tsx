
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { API_URL, EMAIL, PASSWORD } from '../utils/config';

interface ContainerProps {
  children: JSX.Element
}

function Container({ children }: ContainerProps) {

  const router = useRouter();

  const menus = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Devices",
      path: "/devices"
    }
  ];

  const getToken = () => {
    const body = new FormData();
    body.append("username", EMAIL);
    body.append("password", PASSWORD);
    body.append("grant_type", "password");

    axios.post(`${API_URL}/tokens`, body).then(res => {
      localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
    });
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <div className="w-60 h-full shadow-md bg-white px-1 absolute">
        <ul className="relative mt-2">
          {
            menus?.map((item: any) => (
              <li key={item.label} className="relative mb-1" >
                <Link passHref href={item.path}>
                  <a className={`cursor-pointer  flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out ${item.path === router.pathname ? 'bg-gray-100' : ''}`} >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))
          }

        </ul>
      </div>
      <div className='ml-60'>
        {children}
      </div>
    </div>

  );
}

export default Container;