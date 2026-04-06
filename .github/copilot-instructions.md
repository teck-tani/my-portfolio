## Design Context

### Users
- **Primary audience**: 채용 담당자 및 HR 인사팀
- **Context**: 이력서/LinkedIn 등을 통해 유입, 개발자의 경력과 기술 역량을 빠르게 파악하고자 함
- **Job to be done**: 이 개발자가 우리 팀에 적합한 시니어 인재인지 판단하기 위한 정보 습득

### Brand Personality
- **3-word personality**: 전문적, 신뢰감, 안정적
- **Voice & tone**: 과장 없이 경력과 실력이 자연스럽게 드러나는 차분하고 명확한 톤
- **Emotional goals**: 방문자가 "경험 많고 믿을 수 있는 개발자"라는 인상을 받도록 함

### Aesthetic Direction
- **Visual tone**: 깔끔한 미니멀리즘 + 전문적 모던 — Geist 폰트와 Zinc 뉴트럴 팔레트 기반
- **Color system**: Blue-600 / Cyan-500 그라데이션 액센트, Zinc 계열 배경/텍스트
- **Theme**: 라이트/다크 모드 모두 지원 (`prefers-color-scheme` 기반)
- **Anti-references**: 과한 애니메이션/이펙트, 번쩍이는 모션, 터미널/해커풍 클리셰 디자인 지양
- **Animation philosophy**: 최소한의 의미 있는 전환만 사용 (hover 피드백, smooth scroll 정도)

### Design Principles
1. **Content First** — 화려한 장식보다 경력/프로젝트 데이터가 명확하게 전달되는 것이 최우선
2. **Professional Restraint** — 모든 시각 요소는 절제되어야 하며, 액센트 컬러는 핵심 포인트에만 사용
3. **Consistent Hierarchy** — 섹션 헤딩, 카드, 뱃지, 텍스트 간 일관된 시각적 위계 유지
4. **Accessible by Default** — WCAG AA 수준의 색 대비, 키보드 네비게이션, 시맨틱 HTML 준수
5. **Responsive & Inclusive** — 모바일 우선 설계, 모든 화면 크기에서 읽기 편한 레이아웃

### Tech Stack & Tokens
- **Framework**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 (pure utility, no component library)
- **Fonts**: Geist (sans), Geist Mono (monospace) via next/font
- **Spacing scale**: Tailwind default (4px base unit)
- **Border radius**: rounded-xl (12px), rounded-2xl (16px) for cards
- **Shadows**: shadow-sm default, shadow-md on hover
- **Breakpoints**: sm (640), md (768), lg (1024) — mobile-first
