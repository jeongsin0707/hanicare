# HaniCare 웹사이트 배포 가이드

## 🚀 빠른 배포 (5분)

### 1️⃣ Vercel 배포 (가장 추천)

**장점**: 가장 간단하고 빠름, 자동 배포, 무료 SSL

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. 프로젝트 디렉토리로 이동
cd /home/ubuntu/hanicare_web

# 3. 배포 시작
vercel

# 4. 질문에 답변
# - Project name: hanicare (또는 원하는 이름)
# - Scope: 기본값 선택
# - Link to existing project: N
# - Build command: pnpm build (자동 감지됨)
# - Output directory: dist (자동 감지됨)
```

**배포 완료 후**:
- URL이 표시됨 (예: https://hanicare.vercel.app)
- 코드 푸시 시 자동 배포됨

---

### 2️⃣ Netlify 배포

**장점**: GitHub 연동 자동 배포, 무료 SSL

```bash
# 1. GitHub에 코드 푸시
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hanicare.git
git push -u origin main

# 2. Netlify 접속
# https://app.netlify.com

# 3. "New site from Git" 클릭
# 4. GitHub 연결
# 5. 저장소 선택 (hanicare)
# 6. 빌드 설정:
#    - Build command: pnpm build
#    - Publish directory: dist
# 7. "Deploy site" 클릭
```

**배포 완료 후**:
- Netlify에서 자동 생성된 URL 제공
- GitHub에 푸시할 때마다 자동 배포

---

### 3️⃣ GitHub Pages 배포

**장점**: GitHub 저장소만으로 배포 가능

```bash
# 1. package.json 수정 (선택사항)
# "homepage": "https://YOUR_USERNAME.github.io/hanicare"

# 2. 빌드
pnpm build

# 3. GitHub에 dist 폴더 배포
# - GitHub 저장소 Settings → Pages
# - Source: Deploy from a branch
# - Branch: main, folder: /dist
# - Save

# 또는 gh-pages 패키지 사용
pnpm add -D gh-pages
# package.json에 추가:
# "deploy": "gh-pages -d dist"
pnpm deploy
```

---

## 📋 배포 전 체크리스트

- [ ] `pnpm build` 실행 후 오류 없음
- [ ] `dist` 폴더 생성됨
- [ ] 모든 페이지 링크 정상 작동
- [ ] 모바일에서 반응형 디자인 확인
- [ ] 이미지 로드 정상
- [ ] 한의원 데이터 표시 정상

---

## 🔧 환경 변수 설정 (필요시)

`.env` 파일 생성:
```
VITE_API_URL=https://api.example.com
```

---

## 📊 배포 후 모니터링

### Vercel
- https://vercel.com/dashboard에서 실시간 모니터링
- 배포 로그 확인 가능

### Netlify
- https://app.netlify.com에서 실시간 모니터링
- 배포 로그 확인 가능

### GitHub Pages
- GitHub Actions에서 배포 상태 확인

---

## 🆘 문제 해결

### 배포 후 페이지가 안 보임
```bash
# 1. 로컬에서 빌드 확인
pnpm build
pnpm preview

# 2. dist 폴더 확인
ls -la dist/

# 3. 배포 로그 확인
# Vercel/Netlify 대시보드에서 배포 로그 확인
```

### CSS/이미지가 안 보임
- 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
- 배포 플랫폼에서 캐시 초기화

### 라우팅 오류
- Vercel/Netlify: 자동으로 SPA 라우팅 지원
- GitHub Pages: `404.html` 추가 필요 (선택사항)

---

## 💡 팁

1. **도메인 연결**
   - Vercel/Netlify에서 커스텀 도메인 설정 가능
   - DNS 설정 후 자동 SSL 적용

2. **성능 최적화**
   - Vercel/Netlify는 자동으로 이미지 최적화
   - 번들 크기: ~120KB (gzip)

3. **자동 배포**
   - GitHub 푸시 → 자동 빌드 & 배포
   - 배포 완료 후 자동 알림

---

## 📞 지원

배포 중 문제 발생 시:
- Vercel 지원: https://vercel.com/support
- Netlify 지원: https://support.netlify.com
- GitHub Pages 문서: https://pages.github.com
