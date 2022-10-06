import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ACCESS_TOKEN, API_URL } from '../../utils/config';
import { Interface } from '../../utils/types';

const Interface: NextPage = () => {
  const router = useRouter();
  const { data } = useQuery(['interface', router.query.id], async () => {
    const res = await axios.get(`${API_URL}/interfaces/`, {
      headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    return res.data.filter((item: Interface) => item.device === router.query.id);
  });

  return (
    <div>
      <Head>
        <title>Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-6'>
        <h1 className="font-bold text-3xl">Interface</h1>

        <table className="mt-2 table-auto w-full">
          <thead>
            <tr>
              <th className='text-left border-b border-slate-300 p-2'>Name</th>
              <th className='text-left border-b border-slate-300 p-2'>Type</th>
              <th className='text-left border-b border-slate-300 p-2'>Description</th>
            </tr>
          </thead>
          <tbody>

            {
              data?.map((item: any) => (
                <tr key={item._id}>
                  <td className='border-b border-slate-100 p-2'>
                      {item.name}
                  </td>
                  <td className='border-b border-slate-100 p-2'>{item.type}</td>
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

export default Interface
