import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>HaniCare</h3>
          <p>내 몸에 맞는 한의원을 쉽게 찾다</p>
        </div>
        <div className="footer-section">
          <h4>정보</h4>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#contact">연락처</a></li>
            <li><a href="#privacy">개인정보</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>고객 지원</h4>
          <ul>
            <li><a href="#faq">자주 묻는 질문</a></li>
            <li><a href="#feedback">피드백</a></li>
            <li><a href="#terms">이용약관</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HaniCare. All rights reserved.</p>
        <p className="disclaimer">한의원 정보는 각 한의원에서 제공한 내용을 기반으로 합니다. 진료 전 반드시 확인하세요.</p>
      </div>
    </footer>
  )
}
