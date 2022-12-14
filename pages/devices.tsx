import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ORG } from '../utils/config';
import Link from 'next/link';

const Devices: NextPage = () => {
  const { data } = useQuery(['devices'], async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const res = await axios.get(`${API_URL_ORG}/devices/`, {
      headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    return res.data;
  });

  return (
    <div>
      <Head>
        <title>Devices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-6'>
        <h1 className="font-bold text-3xl">Devices</h1>

        <table className="mt-2 table-auto w-full">
          <thead>
            <tr>
              <th className='text-left border-b border-slate-300 p-2'>Name</th>
              <th className='text-left border-b border-slate-300 p-2'>Description</th>
            </tr>
          </thead>
          <tbody>

            {
              data?.map((item: any) => (
                <tr key={item._id}>
                  <td className='border-b border-slate-100 p-2  underline'>
                    <Link href={`/devices/${item._id}`}>
                      {item.name}
                    </Link>
                  </td>
                  <td className='border-b border-slate-100 p-2'>{item.description}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Devices
