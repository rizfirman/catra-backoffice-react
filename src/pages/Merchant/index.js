import React from 'react';
import Layout from '../../components/LayoutDashboard';
import clipboardCheck from '../../assets/icons/clipboard-check.svg';
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Merchant = () => {
  const navigate = useNavigate();
  const merchantResponse =[
    {
      id: 1,
      name: 'PT. Catra Teknologi Indonesia',
      email: 'catra@gmail.com',
      owner: 'Rizky',
      phone: '08123456789',
      status: 'Active',
      subscription: 'Free',
    },
  ]

  const goToTheAddMerchantPage = () => {
    navigate('/merchant/add')
  }

  return (
    <div>
      <Layout>
        <p className="text-[16px] font-sans font-[500]">Merchant</p>
        <p className="text-[14px] font-sans font-[500] text-[#9CA3AF]">Informasi data merchant</p>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="w-[276px] h-[107px] mb-3 p-5">
              <div className="flex">
                <div className="bg-[#059669] w-[40px] h-[40px] flex items-center justify-center rounded-[8px] mr-2">
                  <img src={clipboardCheck} alt="clipboard check" />
                </div>
                <div className="leading-[20px]">
                  <p className="text-[#9CA3AF] text-[14px] font-sans font-[500]">Total merchant</p>
                  <p className="font-sans text-[20px] font-[500]">1000</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                class="appearance-none block w-[312px] mr-2 text-black bg-[#D1D5DB] border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Pencarian"
              />

              <div class="inline-block relative w-[143px] mr-2">
                <select class="block appearance-none w-full   bg-[#D1D5DB] border border-[#D1D5DB] hover:border-gray-500 px-4 py-2 pr-8 rounded-[6px] shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Subscription</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="inline-block relative w-[102px] mr-2">
                <select className="block appearance-none w-full   bg-[#D1D5DB] border border-[#D1D5DB] hover:border-gray-500 px-4 py-2 pr-8 rounded-[6px] shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Status</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button className="bg-[#1E40AF]  text-[12px] font-sans font-[500] rounded-[4px] text-white p-2">
                Submit filter data
              </button>
            </div>
          </div>
          <div className="col-span-4"></div>

          <button onClick={goToTheAddMerchantPage} className="bg-[#1E40AF]  text-[12px] font-sans font-[500] rounded-[4px] text-white p-2 mt-5">
            Tambah merchant
          </button>
        </div>
        <div>
          <div class="relative overflow-x-auto mt-5 border border-gray-200 rounded-[8px]">
            <table class="w-full text-sm text-left ">
              <thead class="text-[12px] font-sans text-gray-500 uppercase bg-[#F9FAFB] ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Merchant
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Owner
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Subscription
                  </th>
                </tr>
              </thead>
              <tbody>
                {merchantResponse.map((item, index) => (
                  <tr className="bg-white border-b ">
                    <td class="px-6 py-4">
                      <p className="text-[14px] font-sans font-[500]">{item.name}</p>
                      <p className="text-[#6B7280] text-[14px] font-sans font-[500]">{item.email}</p>
                    </td>
                    <td class="px-6 py-4">
                      <p className="text-[14px] font-sans font-[500]">{item.owner}</p>
                      <p className="text-[#6B7280] text-[14px] font-sans font-[500]">{item.phone}</p>
                    </td>
                    <td class="px-6 py-4">
                      <div
                        className={`${
                          item.status === 'Active' ? 'bg-[#D1FAE5] text-[#065F46' : 'bg-[#F87171] text-white'
                        } w-[80px] h-[24px] rounded-[10px] flex items-center justify-center`}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.subscription}</td>
                    <td className="text-[#4F46E5]">Edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hidden mt-3 sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-[12px] font-sans font-[500]">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <p className="relative inline-flex items-center rounded-l-md px-2 py-2 text-[#9CA3AF]  focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </p>
                <p className="relative z-10 inline-flex items-center px-4 py-2 text-[#9CA3AF] text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  1
                </p>
                <p className="relative inline-flex items-center px-4 py-2 text-[#9CA3AF] text-sm font-semibold focus:z-20 focus:outline-offset-0">
                  2
                </p>
                <p className="relative hidden items-center px-4 py-2 text-sm text-[#9CA3AF] font-semibold  focus:z-20 focus:outline-offset-0 md:inline-flex">
                  3
                </p>
                <span className="relative inline-flex items-center px-4 py-2 text-sm  text-[#9CA3AF] font-semibold focus:outline-offset-0">
                  ...
                </span>
                <p className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#9CA3AF]  focus:z-20 focus:outline-offset-0 md:inline-flex">
                  8
                </p>
                <p className="relative inline-flex items-center px-4 py-2 text-sm text-[#9CA3AF] font-semibold  focus:z-20 focus:outline-offset-0">
                  9
                </p>
                <p className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#9CA3AF]  focus:z-20 focus:outline-offset-0">
                  10
                </p>
                <p className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#9CA3AF]  focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </p>
              </nav>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Merchant;
