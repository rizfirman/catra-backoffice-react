import React, { useState } from 'react';
import Layout from '../../../components/LayoutDashboard';
import { useNavigate } from 'react-router-dom';
import eyeSymbol from '../../../assets/icons/eye-password.png';

const AddMerchant = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };
  const goToTheMerchantPage = () => {
    navigate('/merchant');
  };

  return (
    <Layout>
      <div className="mb-5">
        <p className="text-[16px] font-sans font-[500]">Merchant</p>
        <p className="text-[14px] font-sans font-[500] text-[#9CA3AF]">Tambah data merchant</p>
      </div>
      <div className="mb-5">
        <p className="text-[16px] font-sans font-[500]">Input Data Merchant</p>
        <p className="text-[14px] font-sans font-[500] text-[#9CA3AF]">Input data informasi umum dari merchant</p>
      </div>

      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-4">
          <div>
            <label for="nama-merchant" className="text-[14px] font-sans font-[500] text-[#374151]">
              Nama Merchant
            </label>
            <input
              class="appearance-none block w-[312px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
              id="nama-merchant"
              type="text"
              placeholder="New merchant name"
            />
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <label for="email-merchant" className="text-[14px] font-sans font-[500] text-[#374151]">
              Email
            </label>
            <input
              class="appearance-none block w-[312px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
              id="email-merchant"
              type="email"
              placeholder="newmerchant@email.com"
            />
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <label for="owner-merchant" className="text-[14px] font-sans font-[500] text-[#374151]">
              Owner
            </label>
            <input
              class="appearance-none block w-[312px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
              id="owner-merchant"
              type="text"
              placeholder="Owner name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-4">
          <div>
            <label for="phone-merchant" className="text-[14px] font-sans font-[500] text-[#374151]">
              Phone
            </label>
            <input
              class="appearance-none block w-[312px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
              id="phone-merchant"
              type="number"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <label for="subscription-type" className="text-[14px] font-sans font-[500] text-[#374151]">
              Jenis Subscription
            </label>

            <select
              id="subscription-type"
              class="block w-[88px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
            >
              <option>Free</option>
              <option>PRO</option>
            </select>
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <label for="status" className="text-[14px] font-sans font-[500] text-[#374151]">
              Status
            </label>

            <select
              id="status"
              class="block w-[88px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
            >
              <option>Aktif</option>
              <option>Tidak Aktif</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-[16px] font-sans font-[500]">User Merchant</p>
        <p className="text-[14px] font-sans font-[500] text-[#9CA3AF]">Input data user untuk login merchant</p>
      </div>

      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-4">
          <div>
            <label for="username-merchant" className="text-[14px] font-sans font-[500] text-[#374151]">
              Username
            </label>
            <input
              class="appearance-none block w-[312px] mr-2 text-black  border border-[#D1D5DB] rounded-[6px] px-4 py-2  leading-tight focus:outline-none focus:bg-white"
              id="username-merchant"
              type="text"
              placeholder="New merchant name"
            />
          </div>
        </div>
        <div className="col-span-4">
          <label for="password" className="text-[14px] font-sans font-[500] text-[#374151]">
            Password
          </label>
          <div className="relative w-[320px] container">
            <input
              id="password"
              className=" shadow appearance-none border rounded w-[320px]  py-2 px-4  leading-tight focus:outline-none focus:shadow-outline"
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
            />

            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={handleShowPassword}
            >
              <img src={eyeSymbol} width={20} height={20} alt="eye" />
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <label for="confirm-password" className="text-[14px] font-sans font-[500] text-[#374151]">
            KOnfirmasi Password
          </label>
          <div className="relative w-[320px] container">
            <input
              id="confirm-password"
              className=" shadow appearance-none border rounded w-[320px]  py-2 px-4  leading-tight focus:outline-none focus:shadow-outline"
              type={isShowConfirmPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
            />

            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={handleShowConfirmPassword}
            >
              <img src={eyeSymbol} width={20} height={20} alt="eye" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <button className="mr-2 w-[65px] h-[30px] rounded-[4px] bg-[#1E40AF] text-[12px] font-[500] font-sans text-white">
          Simpan
        </button>
        <button onClick={goToTheMerchantPage} className="w-[51px] h-[30px] rounded-[4px] bg-[#B91C1C] text-[12px] font-[500] font-sans text-white">
          Batal
        </button>
      </div>
    </Layout>
  );
};

export default AddMerchant;
