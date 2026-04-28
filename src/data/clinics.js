export const SPECIALTIES = [
  "다이어트", "척추/관절", "피부", "여성질환",
  "소화기", "면역/체력", "두통/신경", "소아",
  "성장", "교통사고", "한방내과", "노인질환"
];

export const SPECIALTY_COLORS = {
  "다이어트": "#FF6B6B",
  "척추/관절": "#4ECDC4",
  "피부": "#FFE66D",
  "여성질환": "#FF8B94",
  "소화기": "#A8E6CF",
  "면역/체력": "#88D8B0",
  "두통/신경": "#B4A7D6",
  "소아": "#FFD3A5",
  "성장": "#6BCB77",
  "교통사고": "#4D96FF",
  "한방내과": "#2E7D5E",
  "노인질환": "#C8955B",
};

export const clinics = [
  {
    id: "1",
    name: "서울 자연한의원",
    address: "서울특별시 강남구 테헤란로 123",
    district: "강남구",
    city: "서울",
    phone: "02-1234-5678",
    website: "https://example.com",
    description: "20년 이상의 경력을 가진 전문 한의사들이 운영하는 한의원입니다. 다이어트, 척추 교정, 피부 미용 분야에서 탁월한 치료 성과를 보이고 있습니다.",
    specialties: ["다이어트", "척추/관절", "피부"],
    doctors: [
      { id: "d1", name: "김한의", title: "원장", specialties: ["다이어트", "척추/관절"], education: ["경희대학교 한의과대학 졸업"], career: ["전) 강남 대형 한의원 원장", "현) 서울 자연한의원 원장"] },
      { id: "d2", name: "이미용", title: "부원장", specialties: ["피부", "다이어트"], education: ["동국대학교 한의과대학 졸업"], career: ["현) 서울 자연한의원 부원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "15,000원" },
      { category: "침치료", name: "약침", price: "30,000 ~ 50,000원" },
      { category: "한약", name: "탕약 (1첩)", price: "8,000 ~ 15,000원" },
      { category: "다이어트", name: "다이어트 한약 (1개월)", price: "350,000원~" }
    ],
    reviews: [
      { id: "r1", author: "김**", rating: 5, content: "다이어트 한약 2개월 복용 후 7kg 감량했습니다!", date: "2024-03-15", specialty: "다이어트" },
      { id: "r2", author: "박**", rating: 4, content: "허리 디스크로 고생하다가 추나요법 10회 받고 많이 좋아졌습니다.", date: "2024-02-20", specialty: "척추/관절" }
    ],
    rating: 4.7,
    reviewCount: 128,
    openHours: { weekday: "09:00 - 19:00", saturday: "09:00 - 14:00", sunday: "휴진" },
    tags: ["주차 가능", "야간진료"],
    priceRange: "보통"
  },
  {
    id: "2",
    name: "부산 동래 한의원",
    address: "부산광역시 동래구 온천장로 456",
    district: "동래구",
    city: "부산",
    phone: "051-9876-5432",
    description: "부산 동래 지역에서 30년 이상 운영 중인 전통 한의원입니다. 여성질환과 소아 치료를 전문으로 합니다.",
    specialties: ["여성질환", "소아", "면역/체력"],
    doctors: [
      { id: "d3", name: "박여성", title: "원장", specialties: ["여성질환", "면역/체력"], education: ["부산대학교 한의과대학 졸업"], career: ["현) 부산 동래 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "12,000원" },
      { category: "여성질환", name: "여성 한약 (1개월)", price: "250,000원~" },
      { category: "소아", name: "소아 성장 한약 (1개월)", price: "200,000원~" }
    ],
    reviews: [
      { id: "r4", author: "최**", rating: 5, content: "생리불순으로 고생하다가 3개월 치료 후 완전히 좋아졌어요.", date: "2024-03-01", specialty: "여성질환" }
    ],
    rating: 4.5,
    reviewCount: 89,
    openHours: { weekday: "09:00 - 18:30", saturday: "09:00 - 13:00", sunday: "휴진" },
    tags: ["30년 전통"],
    priceRange: "저렴"
  },
  {
    id: "3",
    name: "강남 프리미엄 한의원",
    address: "서울특별시 강남구 압구정로 789",
    district: "강남구",
    city: "서울",
    phone: "02-5555-7777",
    description: "최첨단 한방 의료 장비와 전문 의료진을 갖춘 프리미엄 한의원입니다. 교통사고 후유증 치료 전문입니다.",
    specialties: ["교통사고", "척추/관절", "두통/신경"],
    doctors: [
      { id: "d4", name: "최척추", title: "원장", specialties: ["척추/관절", "교통사고"], education: ["경희대학교 한의과대학 졸업"], career: ["전) 경희의료원 한방병원 전임의"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "20,000원" },
      { category: "침치료", name: "약침", price: "50,000 ~ 80,000원" },
      { category: "교통사고", name: "교통사고 집중치료 (1주)", price: "200,000원~" }
    ],
    reviews: [
      { id: "r6", author: "윤**", rating: 5, content: "교통사고 후유증으로 목과 허리가 너무 아팠는데, 2주 집중 치료 후 일상생활이 가능해졌어요.", date: "2024-03-20", specialty: "교통사고" }
    ],
    rating: 4.6,
    reviewCount: 203,
    openHours: { weekday: "09:00 - 20:00", saturday: "09:00 - 15:00", sunday: "휴진" },
    tags: ["자동차보험", "야간진료"],
    priceRange: "고가"
  },
  {
    id: "4",
    name: "대구 중구 한의원",
    address: "대구광역시 중구 동성로 321",
    district: "중구",
    city: "대구",
    phone: "053-1111-2222",
    description: "대구 도심에 위치한 접근성 좋은 한의원입니다. 소화기 질환과 면역력 강화에 특화되어 있습니다.",
    specialties: ["소화기", "면역/체력", "한방내과"],
    doctors: [
      { id: "d6", name: "이소화", title: "원장", specialties: ["소화기", "한방내과"], education: ["대구한의대학교 한의과대학 졸업"], career: ["현) 대구 중구 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "10,000원" },
      { category: "한약", name: "소화기 한약 (1개월)", price: "180,000원~" },
      { category: "한약", name: "면역 보약 (1개월)", price: "200,000원~" }
    ],
    reviews: [
      { id: "r8", author: "서**", rating: 5, content: "과민성 대장증후군으로 고생했는데 3개월 치료 후 거의 완치됐어요.", date: "2024-02-28", specialty: "소화기" }
    ],
    rating: 4.4,
    reviewCount: 67,
    openHours: { weekday: "09:00 - 18:00", saturday: "09:00 - 13:00", sunday: "휴진" },
    tags: ["합리적 가격"],
    priceRange: "저렴"
  },
  {
    id: "5",
    name: "인천 연수 한의원",
    address: "인천광역시 연수구 송도대로 555",
    district: "연수구",
    city: "인천",
    phone: "032-7777-8888",
    description: "송도 신도시에 위치한 현대적인 한의원입니다. 성장 클리닉과 소아 한방 치료를 전문으로 합니다.",
    specialties: ["성장", "소아", "면역/체력"],
    doctors: [
      { id: "d7", name: "조성장", title: "원장", specialties: ["성장", "소아"], education: ["원광대학교 한의과대학 졸업"], career: ["전) 소아 전문 한의원 근무"] }
    ],
    prices: [
      { category: "침치료", name: "소아 침 (무통)", price: "12,000원" },
      { category: "성장", name: "성장 한약 (1개월)", price: "220,000원~" },
      { category: "성장", name: "성장 침 + 한약 패키지 (3개월)", price: "550,000원~" }
    ],
    reviews: [
      { id: "r9", author: "김**", rating: 5, content: "아이 성장이 또래보다 느려서 걱정이었는데, 6개월 치료 후 키가 많이 컸어요.", date: "2024-03-10", specialty: "성장" }
    ],
    rating: 4.8,
    reviewCount: 156,
    openHours: { weekday: "09:00 - 19:00", saturday: "09:00 - 14:00", sunday: "휴진" },
    tags: ["소아 전문", "어린이 친화"],
    priceRange: "보통"
  },
  {
    id: "6",
    name: "광주 서구 한의원",
    address: "광주광역시 서구 상무대로 100",
    district: "서구",
    city: "광주",
    phone: "062-3333-4444",
    description: "광주 상무지구에 위치한 한의원으로 노인 질환과 만성 통증 치료에 특화되어 있습니다.",
    specialties: ["노인질환", "척추/관절", "한방내과"],
    doctors: [
      { id: "d8", name: "문노인", title: "원장", specialties: ["노인질환", "척추/관절"], education: ["전남대학교 한의과대학 졸업"], career: ["현) 광주 서구 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "12,000원" },
      { category: "한약", name: "노인 보약 (1개월)", price: "200,000원~" }
    ],
    reviews: [
      { id: "r10", author: "오**", rating: 4, content: "무릎 관절염으로 고생하시는 어머니를 모시고 왔는데, 침 치료 후 통증이 많이 줄었다고 하세요.", date: "2024-02-15", specialty: "노인질환" }
    ],
    rating: 4.3,
    reviewCount: 45,
    openHours: { weekday: "09:00 - 17:30", saturday: "09:00 - 12:30", sunday: "휴진" },
    tags: ["어르신 친화"],
    priceRange: "저렴"
  }
];
