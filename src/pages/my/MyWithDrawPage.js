// 담당자: 최배근
import React, { useEffect, useState } from 'react'
import { JoinHeader } from '../../styles/join/JoinFirstPageStyle'
import { IdBox, LoginBox, PwBox } from '../../styles/login/LoginPageStyle'
import { BtSection, CancelBt,  SaveBt } from '../../styles/join/JoinPageStyle'
import { patchWithdraw } from "../../api/my/my_api";
import styled from '@emotion/styled';
import useCustomLogin from '../../hooks/useCustomLogin';
import { useNavigate } from 'react-router-dom';
import JoinPopUp, { ModalBackground } from '../../components/joinpopup/JoinPopUp';

const MyWithDrawPw = styled.div`
  display: flex;
  justify-content: space-between;
  width: 390px;
  position: relative;
  /* background: pink; */
  img {
    width: 180px;
    height: 180px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
  }
  input {
    position: relative;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #2c39b5;
    padding-left: 20px;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    right: 3px;
    top: 7px;
  }
`

const MyWithDrawPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // 비밀번호 보이기/감추기
  const [showPassword, setShowPassword] = useState(false);

  const { doLogout } = useCustomLogin();
  const [showModal, setShowModal] = useState(false);
  const [withdrawError, setWithdrawError] = useState('');
  const navigate = useNavigate();

  const resetValues = () => {
    setId('');
    setPassword('');
    setPhone('');
    setShowPassword(false);
  };

  const closeModal = () => {
    if (!withdrawError) {
      doLogout();
    }
    setShowModal(false);
    navigate(`/my?rental`, { state: { selectedItem: "대여중" } });
    sessionStorage.setItem('selectedItem', "대여중");
  };

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

    const handleWithdraw = async () => {
      try {
        const data = {
          uid: id,
          upw: password,
          phone: phone
        };
        await patchWithdraw(data);
        setShowModal(true);
      } catch (error) {
        console.error(error);
        setWithdrawError('거래중인 내역이 있어 탈퇴할 수 없습니다');
        setShowModal(true);
      }
    };

    const handleLogOut = () => {
      handleWithdraw();
    }
    const handleCancel = () => {
      resetValues();
    };

  return (
    <>
        <JoinHeader mgtop={"0"} mgbtm={"0"}>
          <p>회원탈퇴</p>
        </JoinHeader>
        <LoginBox mgbtm={"80px"}>
          <p>
          ※ 탈퇴한 아이디로는 다시 가입할 수 없습니다.
          <br />
            ※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 
            <br />
            신중히 진행하세요.
          </p>
          <IdBox type="text" maxLength={15} placeholder="아이디" 
          value={id} onChange={(e) => setId(e.target.value)}/>
          <MyWithDrawPw>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <button
                type="button"
                style={{
                  background: "transparent",
                  border: `none`,
                  width: `0px`,
                  height: `0px`,
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <img
                    src="/images/join/eye_open.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                ) : (
                  <img
                    src="/images/join/eye_close.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                )}
              </button>
              </MyWithDrawPw>  
          
          <PwBox type="text" maxLength={14} placeholder="휴대폰 번호" 
          value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <BtSection mgtop={"40px"} mgbtm={"20px"} width={"380px"}>
                <CancelBt onClick={handleCancel}>취소</CancelBt>
                <SaveBt onClick={handleLogOut}>탈퇴</SaveBt>
                {showModal && (
                  <>
                    <JoinPopUp
                      txt={withdrawError || "회원 탈퇴 하셨습니다."}
                      onConfirm={closeModal}
                    />
                    <ModalBackground></ModalBackground>
                  </>
                )}
            </BtSection>
        </LoginBox>
    </>
  )
}

export default MyWithDrawPage