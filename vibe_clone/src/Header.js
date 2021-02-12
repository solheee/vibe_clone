import "./Header.css";

function Header() {
    return (
        <header>
            <div className="headCard">
                <div className="headCardImg"></div>
                <div className="cardInfoBox">
                    <div className="badge">Genre</div>
                    <h2>노래로 불러보는 가족</h2>
                    <p>
                        코로나19가 가장 크게 바꿔 놓은 것 중 하나는 명절의 풍경
                        아닐까. 한 해에 몇 번 겨우 보던 가족과의 만남은 이제
                        위험을 전파할 수 있는 일이 되고 말았다. 그래서 그리...
                    </p>
                    <span className="cardInfo">VIBE MAG</span>
                    <span className="cardDate">2021.02.11</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
