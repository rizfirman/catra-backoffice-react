
import { useState } from 'react';
import eyeSymbol from '../../assets/icons/eye-password.png';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  console.log(userName, password)
  return (
    <div className="login flex min-h-screen w-full flex-col grow">
      <div className="flex h-32 w-screen"></div>
      <div className="flex h-auto w-screen flex-row grow p-5">
        <div className="flex w-full justify-center  items-center ">
          <div>
            <p className="text-[32px] font-normal font-sans">Catra Backoffice</p>
            <p className="text-[32px] font-normal font-sans">Login</p>
            <p className="text-[18px] font-normal font-sans">Masukan Username dan Password untuk Log In</p>
            <input
              className="shadow appearance-none border rounded w-[320px] h-[42px] py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="username"
              onChange={handleChange}
            />

            <div className="relative w-[320px] container">
              <input
                className="mt-2 shadow appearance-none border rounded w-[320px] h-[42px] py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type={isShowPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                onChange={handleChange}
              />

              <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={handleShowPassword}
              >
                <img src={eyeSymbol} width={20} height={20} alt="eye" />
              </button>
            </div>
            <button className="bg-[#1E40AF] rounded-[4px] mt-2 text-[12px] font-normal text-white  font-sans w-[54px] h-[30px]">
              Login
            </button>
          </div>
        </div>
        <div className="blue-side flex w-full bg-[#1E3A8A] rounded-[10px]"></div>
      </div>
      <div className="flex h-32 w-screen justify-center">
        <p className="text-[14px] font-[500] font-sans">Copyright 2022. All Right Reserved</p>
      </div>
    </div>
  );
}

export default LoginPage;
