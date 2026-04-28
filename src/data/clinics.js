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

export const SPECIALTY_IMAGES = {
  "다이어트": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  "척추/관절": "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
  "피부": "https://images.unsplash.com/photo-1570172619644-dfd03cb5f913?w=400&h=300&fit=crop",
  "여성질환": "https://images.unsplash.com/photo-1559839734033-6461efaf3cef?w=400&h=300&fit=crop",
  "소화기": "https://images.unsplash.com/photo-1584308666744-24d5f400f628?w=400&h=300&fit=crop",
  "면역/체력": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  "두통/신경": "https://images.unsplash.com/photo-1559839734033-6461efaf3cef?w=400&h=300&fit=crop",
  "소아": "https://images.unsplash.com/photo-1503454537688-e6c6ff1ee367?w=400&h=300&fit=crop",
  "성장": "https://images.unsplash.com/photo-1503454537688-e6c6ff1ee367?w=400&h=300&fit=crop",
  "교통사고": "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
  "한방내과": "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
  "노인질환": "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1559839734033-6461efaf3cef?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1631217b9201-d5ffd007da1d?w=400&h=300&fit=crop",
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
    openHours: { weekday: "09:00 - 19:00", saturday: "09:00 - 15:00", sunday: "휴진" },
    tags: ["최신 장비", "프리미엄"],
    priceRange: "비싼"
  },
  {
    id: "4",
    name: "대구 피부 한의원",
    address: "대구광역시 중구 동성로 234",
    district: "중구",
    city: "대구",
    phone: "053-1234-5678",
    description: "피부 질환 치료 전문 한의원입니다. 여드름, 아토피, 건선 등 다양한 피부 질환을 한의학적으로 치료합니다.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03cb5f913?w=400&h=300&fit=crop",
    specialties: ["피부", "소화기"],
    doctors: [
      { id: "d5", name: "이피부", title: "원장", specialties: ["피부"], education: ["대구한의대학교 한의과대학 졸업"], career: ["현) 대구 피부 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "15,000원" },
      { category: "피부", name: "피부 한약 (1개월)", price: "300,000원~" }
    ],
    reviews: [
      { id: "r8", author: "송**", rating: 5, content: "여드름으로 고생했는데 2개월 치료 후 깨끗해졌어요!", date: "2024-03-10", specialty: "피부" }
    ],
    rating: 4.8,
    reviewCount: 156,
    openHours: { weekday: "09:00 - 19:00", saturday: "09:00 - 14:00", sunday: "휴진" },
    tags: ["피부 전문"],
    priceRange: "보통"
  },
  {
    id: "5",
    name: "인천 소아 한의원",
    address: "인천광역시 남동구 남동대로 567",
    district: "남동구",
    city: "인천",
    phone: "032-7890-1234",
    description: "소아 질환과 성장 발달을 전문으로 하는 한의원입니다. 아이들의 건강한 성장을 돕습니다.",
    image: "https://images.unsplash.com/photo-1503454537688-e6c6ff1ee367?w=400&h=300&fit=crop",
    specialties: ["소아", "성장", "면역/체력"],
    doctors: [
      { id: "d6", name: "박소아", title: "원장", specialties: ["소아", "성장"], education: ["경희대학교 한의과대학 졸업"], career: ["현) 인천 소아 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "소아 침", price: "10,000원" },
      { category: "소아", name: "성장 한약 (1개월)", price: "250,000원~" }
    ],
    reviews: [
      { id: "r10", author: "정**", rating: 5, content: "아이 키 크는데 정말 도움이 되었어요!", date: "2024-02-28", specialty: "성장" }
    ],
    rating: 4.9,
    reviewCount: 142,
    openHours: { weekday: "09:00 - 18:00", saturday: "09:00 - 13:00", sunday: "휴진" },
    tags: ["소아 전문", "성장 전문"],
    priceRange: "보통"
  },
  {
    id: "6",
    name: "광주 종합 한의원",
    address: "광주광역시 동구 충장로 890",
    district: "동구",
    city: "광주",
    phone: "062-5555-9999",
    description: "다양한 질환을 종합적으로 치료하는 한의원입니다. 한방내과 전문입니다.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
    specialties: ["한방내과", "소화기", "면역/체력"],
    doctors: [
      { id: "d7", name: "최종합", title: "원장", specialties: ["한방내과"], education: ["조선대학교 한의과대학 졸업"], career: ["현) 광주 종합 한의원 원장"] }
    ],
    prices: [
      { category: "침치료", name: "일반 침", price: "13,000원" },
      { category: "한방내과", name: "체질 개선 한약 (1개월)", price: "280,000원~" }
    ],
    reviews: [
      { id: "r12", author: "이**", rating: 4, content: "소화가 잘 안 되었는데 한약 복용 후 많이 좋아졌습니다.", date: "2024-03-05", specialty: "소화기" }
    ],
    rating: 4.4,
    reviewCount: 98,
    openHours: { weekday: "09:00 - 18:30", saturday: "09:00 - 13:30", sunday: "휴진" },
    tags: ["종합 진료"],
    priceRange: "저렴"
  }
];
