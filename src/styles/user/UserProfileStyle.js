import styled from "@emotion/styled";

export const PageWrap = styled.div`
   width: 1980px;
   display: flex;
   justify-content: center;
`
export const Wrap = styled.div`
    width: 1260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export const Header = styled.div`
    font-size: 24px;
    margin-bottom: 100px;
    hr {
        margin-top: 20px;
        border: 1px solid #2C39B5;
    }
`

export const UserInfoWrap = styled.div`
    top: 200px;
`

export const UserInfo = styled.div`
    border: 1px solid #D9D9D9;
    border-radius: 7px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    height: 180px;
        hr {
            margin-top: 20px;
            border: 0.7px solid #D9D9D9;
            height: 140px;
        }
        .profile-wrap {
            display: flex;
            top: 100px;
            padding-top: 55px;
        }.rating-wrap { 
            width: 500px;
            display: flex;
            justify-content: space-between;
        }
`

export const ProfileImg = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-left: -50px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
`

export const UserName = styled.div`
    font-size: 20px;
    padding-top:20px;
    margin-left: 20px;
`

export const Rating = styled.div`
        padding-top: 55px;
    >div {
        font-size: 16px;
        color: #777;
    }
    img {
        padding-top: 10px;
    }
`
export const Demerit = styled.div`
    font-size: 16px;
    color: #777;
    padding-top: 55px;
    .score {
        margin-top: 10px;
    }
`

export const PostInfoWrap = styled.div`

`

export const PostInfo = styled.div`
    width: 1260px;
    margin-top: 35px;
    background-color: #F2F2FF;
    border-radius: 7px;
    justify-content: center;
`

export const Title = styled.div`
    width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    margin-left: 25px;
`

export const PostWrap = styled.div`
    justify-content: center;
    padding-top: 25px;
    padding-left: 25px;
`
export const Post = styled.div`
    width: 1210px;
    height: 130px;
    border: 1.5px solid #2C39B5;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    >div {
        display: flex;
    }
`
export const PostImg = styled.div`
    img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin: 12px;
    }
`

export const PostDesc = styled.div`
    padding-top: 15px;
.post-info-title {
    font-size: 12px;
    color: #777;
}
.post-info-price {
    padding-top: 20px;
    font-size: 20px;
}
.post-info-date {
    padding-top: 15px;
    font-size: 12px;
    color: #777;
}
`

export const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-right: 25px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
    .user-name {
        font-size: 12px;
    }
`