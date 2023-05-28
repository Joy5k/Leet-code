import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form className='space-y-6 px-6 py-4' >
        <h3 className='text-xl font-medium text-white'>Sign in to leet code</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium text-gray-300 block mb-2'>
                Your Email
            </label>
            <input type="email" name="email" id="email" className='
            border-2  outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        ' placeholder='name@gmail.com'/>
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium text-gray-300 block mb-2'>
                Your password
            </label>
            <input type="password" name="password" id="password" className='
            border-2  outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        ' placeholder='*******'/>
        </div>
        <button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-orange-400 hover:bg-orange-400-s
            '
        >login</button>
     <button className='flex w-full justify-end'>
				<a href='#' className='text-sm block text-orange-400 hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
        <div className='text-sm font-medium text-gray-300'>
            Not Register?{" "}
        <a href='#' className='text-blue-700 hover:underline' >
            Create account
        </a>
        </div>
    </form>
}
export default Login;