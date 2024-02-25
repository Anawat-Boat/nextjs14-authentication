"use client";
import { signIn, userSelector } from '@/store/slices/userSlice';
import { useAppDispatch } from "@/store/store";
import { Button, Input } from 'antd';
import Form from "antd/es/form";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type FieldType = {
  username?: string;
  password?: string;
};
const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const reducer = useSelector(userSelector);

  const onFinish = async (values: any) => {
    const result = await dispatch(signIn(values));
    if (signIn.fulfilled.match(result)) {
      router.push("/main");
    } else if (signIn.rejected.match(result)) {
      alert("signin failed");
    }
  };
  const handleSignup=()=> {
    router.push('/signup')
  }
  return <div className=' text-black text-center x'>
      <div className='py-4'> SignIn</div>
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
          <Button type="default" htmlType="button" onClick={()=> {handleSignup()}} loading={reducer.status==='fetching'}  >
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </div>
};

export default SignIn;
