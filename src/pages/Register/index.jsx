import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BgRegister } from '../../assets/images'
import { Button, Gap, Input, Link } from '../../components'
import { register, setFormRegister } from '../../config/action/auth'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { formRegister } = useSelector(state => state.authReducer);

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formRegister))
    }

    return (
        <div className='flex'>
            <div className='w-2/3 bg-blue-500 h-screen'>
                <img src={BgRegister} alt="BgRegister" className='bg-cover w-full h-full' />
            </div>
            <form className='w-1/3 flex flex-col justify-center'>
                <div className='p-5'>
                    <Input
                        label={'Full Name'}
                        placeholder={'Full Name'}
                        type='text'
                        name='name'
                        autoComplete="off"
                        onChange={(e) => dispatch(setFormRegister('name', e.target.value))}
                    />
                    <Gap height={8} />
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
                    <Button text={'Register'} onClick={onSubmit} />
                    <Gap height={100} />
                    <Link title={'Kembali ke login'} onClick={() => navigate('/auth/login')} />
                </div>
            </form>
        </div>
    )
}

export default Register