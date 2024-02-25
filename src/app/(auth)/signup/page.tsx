'use client'
import React from 'react'
import { Button, Form, Input } from 'antd';
import { signUp, userSelector } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/store/store';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const SignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const reducer = useSelector(userSelector);

  const onFinish = async (values: any) => {
    const result = await dispatch(signUp(values));
    if (signUp.fulfilled.match(result)) {
      router.push("/signin");
    } else if (signUp.rejected.match(result)) {
      alert("Register failed");
    }
  };
  const handleSignin=()=> {
    router.push('/signin')
  }

  type FieldType = {
    username?: string;
    password?: string;
  };
  
  return (
    <div className=' text-black text-center x'>
      <div className='py-4'> SignUp </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed} 
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" loading={reducer.status==='fetching'}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item >
          <Button type="default" htmlType="button" onClick={()=> {handleSignin()}} loading={reducer.status==='fetching'}  >
            SignIn
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp




