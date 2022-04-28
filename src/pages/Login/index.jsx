import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BgLogin } from '../../assets/images'
import { Button, Gap, Input, Link } from '../../components'
import { login, setFormRegister } from '../../config/action/auth'

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formRegister } = useSelector(state => state.authReducer)

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formRegister))
    }

    return (
        <div className='flex'>
            <div className='w-2/3 bg-blue-500 h-screen'>
                {/* <BgRegister /> */}
                <img src={BgLogin} alt="BgRegister" className='bg-cover w-full h-full' />
            </div>
            <form onSubmit={onSubmit} className='w-1/3 flex flex-col justify-center'>
                <div className='p-5'>
                    <Input
                        label={'Email'}
                        placeholder={'Email'}
                        type='email'
                        name='email'
                        autoComplete="off"
                        onChange={(e) => dispatch(setFormRegister('email', e.target.value))}
                    />
                    <Gap height={8} />
                    <Input
                        label={'Password'}
                        placeholder={'Password'}
                        type='password'
                        name='password'
                        autoComplete="off"
                        onChange={(e) => dispatch(setFormRegister('password', e.target.value))}

                    />
                    <Gap height={8} />
                    <Button text={'Login'} />
                    <Gap height={100} />
                    <Link title={'Belum punya akun? Daftar!!'} onClick={() => navigate('/auth/register')} />

                </div>
            </form>
        </div>
    )
}

export default Register