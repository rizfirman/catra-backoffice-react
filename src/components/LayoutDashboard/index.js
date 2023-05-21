import React from 'react';
import CatraLogo from '../../assets/icons/catra-logo.svg';
import { Link, NavLink } from 'react-router-dom';
import DashboardLogo from '../../assets/icons/dashboard-icon.svg';
import MerchantIcon from '../../assets/icons/merchant-icon.svg';
import UserIcon from '../../assets/icons/user-icon.svg';
import DataSubsIcon from '../../assets/icons/data-subs-icon.svg';
import OnlineShopIcon from '../../assets/icons/online-shop-icon.svg';
import NonTunaiIcon from '../../assets/icons/non-tunai-icon.svg';
import ConfigIcon from '../../assets/icons/config-icon.svg';

const Layout = ({ children, active }) => {
  return (
    <div>
      <div className="mx-auto  grid grid-cols-12">
        <header className="col-span-12 p-5 shadow-lg ">
          <div>
            <img src={CatraLogo} alt="Catra Logo" />
          </div>
        </header>

        <aside className="col-span-2 border border-r-2">
          <NavLink to="/dashboard" className="flex p-5 hover:bg-gray-200">
            <img src={DashboardLogo} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Dashboard</p>
          </NavLink>
          <NavLink to="/merchant" className="flex p-5 hover:bg-gray-200">
            <img src={MerchantIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Merchant</p>
          </NavLink>
          <Link to="#" className="flex p-5 hover:bg-gray-200">
            <img src={UserIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Users</p>
          </Link>
          <Link to="#" className="flex p-5 hover:bg-gray-200">
            <img src={DataSubsIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Data Subscription</p>
          </Link>
          <Link to="#" className="flex p-5 hover:bg-gray-200">
            <img src={OnlineShopIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Data Online Shop</p>
          </Link>
          <Link to="#" className="flex p-5 hover:bg-gray-200">
            <img src={NonTunaiIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Pembayaran Non Tunai</p>
          </Link>
          <div className="p-5"></div>

          <Link to="#" className="flex p-5 hover:bg-gray-200">
            <img src={ConfigIcon} alt="Dashboard Logo" className="mr-2" />
            <p className="text-[16px] font-[500] text-[#6B7280] font-sans">Config</p>
          </Link>
        </aside>

        <main class="col-span-10 h-[100vh]  p-10 overflow-scroll">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
