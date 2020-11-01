import React from 'react'
import WrapperTime from '../components/WrapperTime'
import config from '../config';

export const showTimer = (count) => {
  let minutes, seconds
  minutes = parseInt(count / 60, 10)
  seconds = parseInt(count % 60, 10)
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds
  return <WrapperTime minute={minutes} second={seconds} />
}

export const uploadMember = () => {
  return new Promise(async (resolve, reject) => {
    const resMember = await fetch(config.apiLocalMember)
    .then(res => res.json())
    .catch(err => console.log('Cannot get data from '+config.apiLocalMember));
    if (resMember) {
      // const data = resMember.data;
      resolve('member sync up success');
    } else {
      reject('member sync up failure')
    }
  })
}

export const uploadRedeem = () => {
  return new Promise(async (resolve, reject) => {
    const resRedeem = await fetch(config.apiLocalRedeem)
    .then(res => res.json())
    .catch(err => console.log('Cannot get data from '+config.apiLocalRedeem));
    if (resRedeem) {
      // const data = resRedeem.data;
      resolve('redeem sync up success');
    } else {
      reject('redeem sync up failure')
    }
  })
}

export const saveRedeemLocal = async (payload) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(config.apiLocalRedeem, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    }).catch((err) => {
      reject(err)
    })
    if(response){
      resolve("Save redeem to local success")
    }else{
      reject('Cannot save redeem to local')
    }
  })
}

export const saveMemberLocal = async (payload) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(config.apiLocalMember, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    }).catch((err) => {
      reject(err)
    })
    if(response){
      resolve("Save member to local success")
    }else{
      reject('Cannot save member to local')
    }
  })
}

export const initLoadData = async () => {
  console.log('init load data function');
  await fetch(config.apiServiceMember)
  .then(res => res.json())
  .then(result => {
    console.log('member sync');
    console.log(result);
  })
  .catch(err => console.log('Cannot get data from '+config.apiLocalMember));

  await fetch(config.apiServiceRedeem)
  .then(res => res.json())
  .then(result => {
    console.log('redeem sync');
    console.log(result);
  })
  .catch(err => console.log('Cannot get data from '+config.apiServiceRedeem));
}
