export default function Profile(){

    return(
        <div className="profile_container">
        <h2>/ About Me</h2>
        <div className="profile_wrapper">
            
            <div className="profile">
                <img src="name.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>이름</p>
                    <p>서동현</p>
                </div>
            </div>
            <div className="profile">
                <img src="birth.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>생년월일</p>
                    <p>1997.11.17</p>
                </div>
            </div>
            <div className="profile">
                <img src="home.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>주소지</p>
                    <p>대구광역시 북구</p>
                </div>
            </div>
            <div className="profile">
                <img src="phone.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>연락처</p>
                    <p>010-3159-9916</p>
                </div>
            </div>
            <div className="profile">
                <img src="address.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>이메일</p>
                    <p>durcjsay@gmail.com</p>
                </div>
            </div>
            <div className="profile">
                <img src="Education.svg" width={50} height={50}></img>
                <div className="profile_content">
                    <p>학력</p>
                    <p>금오공과대학교 컴퓨터공학과</p>
                </div>
            </div>
        </div>
        </div>
    )
}