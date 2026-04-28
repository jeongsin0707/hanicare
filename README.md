# HaniCare - 한의원 찾기 웹사이트

내 몸에 맞는 한의원을 쉽게 찾을 수 있는 웹사이트입니다.

## 🌿 주요 기능

### 홈페이지
- 특화분야별 카테고리 (12가지)
- 평점 높은 한의원 추천
- 한의원 선택 팁

### 검색 및 필터
- 한의원 이름, 지역, 특화분야로 검색
- 특화분야별 필터링
- 지역별 필터링
- 가격대별 필터링
- 평점순, 리뷰순, 이름순 정렬

### 한의원 상세 정보
- 한의원 소개
- 전문 특화분야
- 의료진 정보 (학력, 경력)
- 진료비 정보
- 진료시간
- 고객 리뷰
- 전화 예약 버튼

### 즐겨찾기
- 한의원 즐겨찾기 추가/제거
- 즐겨찾기 카운트 표시

## 🛠️ 기술 스택

- **프레임워크**: React 18
- **라우팅**: React Router v6
- **번들러**: Vite
- **스타일**: CSS3
- **아이콘**: Lucide React

## 📦 설치 및 실행

### 개발 환경
```bash
pnpm install
pnpm dev
```

### 프로덕션 빌드
```bash
pnpm build
pnpm preview
```

## 📁 프로젝트 구조

```
hanicare_web/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ClinicCard.jsx
│   │   └── ClinicCard.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── SearchPage.jsx
│   │   ├── SearchPage.css
│   │   ├── ClinicDetailPage.jsx
│   │   └── ClinicDetailPage.css
│   ├── data/
│   │   └── clinics.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 디자인

- **색상 팔레트**: 한방 녹색 계열 (#2E7D5E)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **접근성**: 시맨틱 HTML, ARIA 레이블

## 📊 데이터

현재 6개의 한의원 목 데이터가 포함되어 있습니다:
- 서울 자연한의원 (강남구)
- 부산 동래 한의원 (동래구)
- 강남 프리미엄 한의원 (강남구)
- 대구 중구 한의원 (중구)
- 인천 연수 한의원 (연수구)
- 광주 서구 한의원 (서구)

## 🚀 배포

### Vercel 배포
```bash
npm install -g vercel
vercel
```

### Netlify 배포
1. GitHub에 코드 푸시
2. Netlify에서 GitHub 연결
3. 빌드 설정:
   - Build command: `pnpm build`
   - Publish directory: `dist`

## 📝 라이선스

MIT

## 💡 향후 개선 사항

- 지도 연동 (Google Maps)
- 실제 한의원 데이터 연동 (API)
- 사용자 리뷰 작성 기능
- 온라인 예약 기능
- 모바일 앱 버전
- 다국어 지원
