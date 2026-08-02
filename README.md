# 권득천 포트폴리오

Java/Spring 기반 B2B 시스템을 17년 이상 개발해 온 시니어 개발자 권득천의 경력 포트폴리오입니다. 제조·데이터 품질·모바일 업무 시스템에서의 풀스택 구현 경험과 PL 수행 역량을 채용 담당자가 빠르게 확인할 수 있도록 구성했습니다.

## 로컬 실행

Node.js 20.9 이상과 npm을 사용합니다.

```bash
npm install
npm run dev
```

브라우저에서 <http://localhost:3000>을 엽니다.

## 검증 명령

```bash
npm run check:assets  # 이미지 경로·대소문자·파일 형식·크기 검사
npm run lint          # ESLint
npm run build         # Next.js 프로덕션 빌드
npm run verify        # 위 세 검사를 순서대로 실행
```

`check:assets`는 `src`의 `/my.jpg`와 `/img/...` 참조를 수집해 `public` 아래 실제 파일과 정확한 대소문자까지 비교합니다. PNG/JPEG 헤더도 읽어 손상 여부와 이미지 크기를 확인하므로, Windows에서는 드러나지 않던 배포 환경의 경로 오류를 미리 찾을 수 있습니다.

## 주요 구조

```text
src/app/                  페이지, 레이아웃, 전역 스타일
src/components/           공통 UI 컴포넌트
src/data/                 경력·프로젝트·기술 데이터
public/img/               프로젝트 스크린샷
scripts/check-assets.mjs  정적 이미지 검증기
```

## 이미지 배포 정책

모든 포트폴리오 이미지는 저장소의 `public`에서 직접 제공합니다. `next.config.ts`의 `images.unoptimized: true`는 Vercel Hobby 플랜의 이미지 최적화 사용량에 의존하지 않고 정적 원본을 안정적으로 제공하기 위한 설정입니다. 따라서 추가하는 이미지는 배포 전에 적절한 해상도와 용량으로 준비하고 `npm run check:assets`를 통과해야 합니다.

프로덕션 배포는 Vercel의 Next.js 빌드 설정을 사용합니다.

## 검색 노출 정책

이 사이트는 검색포털 유입을 목적으로 하지 않습니다. 모든 페이지에 `noindex`,
`nofollow` 메타데이터와 `X-Robots-Tag` 응답 헤더를 적용하고, `robots.txt`에서
전체 크롤링을 차단합니다. 사이트맵도 제공하지 않으며 링크를 직접 전달받은
사람이 확인하는 포트폴리오로 운영합니다.
