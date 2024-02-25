'use client'
import { Button } from 'antd'
import React from 'react'
import { signOut, userSelector } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/store/store';
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

  const Main = () => {
  const dispatch = useAppDispatch();
  const reducer = useSelector(userSelector);
  const router = useRouter();
  const onHanddleSigout = async () => {
    const result = await dispatch(signOut());
    if (signOut.fulfilled.match(result)) {
      router.push("/signin");
    } else if (signOut.rejected.match(result)) {
      alert("signOut failed");
    }
  };
  return (
    <div>Main <div>
      <Button type="primary" htmlType="button" onClick={()=> {onHanddleSigout()}} >
        Signout
      </Button>
      </div>
    </div>

  )
}

export default Main