<div align="center">

# Glow Me Up 웹 결과 페이지

**키오스크 AI 변환 결과를 QR로 확인할 수 있는 반응형 웹 페이지**

<br/>

<img src="https://img.shields.io/badge/Framework-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
<img src="https://img.shields.io/badge/GCS-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />

</div>

## 프로젝트 소개

**NEXT IDOL 웹 결과 페이지**는 전시장 키오스크 프로그램에서 생성된 AI 아이돌 변환 결과를  
사용자가 QR을 통해 모바일 또는 웹에서 확인할 수 있도록 제작한 반응형 웹 서비스입니다.

사용자는 닉네임으로 자신의 결과를 검색하거나 생성된 카드 목록을 탐색할 수 있으며,  
선택한 결과 이미지를 확대해서 확인하고 다운로드할 수 있습니다.

또한 접속 환경에 따라 모바일과 PC 화면을 다르게 구성하여  
모바일에서는 결과 탐색과 다운로드 중심의 경험을 제공하고,  
PC에서는 QR을 통해 모바일 결과 페이지로 자연스럽게 유도하도록 설계하였습니다.

---

## 담당 역할

### React 기반 웹 결과 페이지 개발
- 결과 이미지 목록 조회 및 카드형 UI 구현
- 닉네임 검색 기능 구현
- 결과 상세 보기 및 다운로드 기능 구현
- 모바일 및 PC 환경에 따른 화면 분기 처리
- 반응형 레이아웃 구성 및 화면별 UX 최적화

### Firebase 및 GCS 연동
- Firebase 기반 데이터 흐름 연동
- Google Cloud Storage에 저장된 결과 이미지 조회 처리
- 새 이미지가 추가되었을 때 자동으로 반영될 수 있도록 폴링 구조 구현

### 인터랙션 및 퍼포먼스 개선
- 카드 hover 및 touch 이동에 따라 3D 회전 인터랙션 적용
- 모바일 등 저사양 환경을 고려하여 `will-change` 속성을 활용한 렌더링 최적화
- 새로 추가된 이미지가 자연스럽게 드러나도록 강조 효과 구현

---

## 기술 스택

- React
- HTML
- CSS
- JavaScript
- Firebase
- Google Cloud Storage

---

## 주요 기능

- QR 기반 결과 페이지 진입
- 닉네임 검색
- 결과 카드 목록 조회
- 이미지 상세 보기
- 이미지 다운로드
- 신규 이미지 자동 반영
- 모바일 및 PC 접속 환경 분기 처리
- 카드 3D 인터랙션 효과
- 반응형 웹 UI 제공

---

## 구현 포인트

### GCS 이미지 조회 로직 분리
- Google Cloud Storage에 저장된 이미지 목록을 불러오는 커스텀 훅을 제작하여 데이터 조회 로직과 UI 로직을 분리하였습니다.
- 재사용 가능한 구조로 구성하여 목록 조회, 상태 관리, 후속 기능 확장에 유리하도록 설계하였습니다.

### 카드 인터랙션과 성능 최적화
- 카드 위에서 마우스를 움직이거나 터치 후 이동할 때 포인터 위치에 따라 이미지가 3D로 회전하는 인터랙션을 구현하였습니다.
- 모바일 등 저사양 환경에서의 렌더링 부하를 줄이기 위해 `will-change` 속성을 활용하여 성능을 최적화하였습니다.

### 디바이스 환경에 따른 UX 분기
- `user-agent`를 활용해 모바일 접속과 PC 접속을 구분하였습니다.
- 모바일에서는 닉네임 검색과 결과 탐색, 다운로드 중심의 흐름을 제공하고, PC에서는 QR을 통해 모바일 페이지로 유도하는 구조로 설계하였습니다.
- 또한 다양한 화면 크기에 대응할 수 있도록 반응형 웹으로 구현하여 PC와 모바일 모두에서 자연스럽게 결과를 확인할 수 있도록 구성하였습니다.

### 폴링 기반 자동 갱신 처리
- 새 이미지가 추가될 때 사용자가 새로고침하지 않아도 자동으로 목록에 반영되도록 폴링 구조를 적용하였습니다.
- 신규 결과물이 추가되었을 때 강조 효과를 주어 사용자가 변화된 항목을 쉽게 인식할 수 있도록 하였습니다.

### 전시형 결과 조회 경험 구성
- 단순 이미지 나열이 아니라 카드 탐색, 상세 확인, 다운로드까지 이어지는 흐름으로 결과 페이지를 구성하였습니다.
- 오프라인 키오스크 체험 이후 온라인에서 결과를 자연스럽게 이어서 확인할 수 있도록 사용자 경험을 연결하였습니다.

---


## 주요 화면

<table>
  <tr>
    <th>PC 메인 화면</th>
    <th>모바일 메인 화면</th>
  </tr>
  <tr>
    <td align="center">
      PC에서는 QR을 통해 모바일 결과 페이지로 진입할 수 있도록 안내하는 화면
      <br/><br/>
      <img width="480" alt="PC 메인 화면"  src="https://github.com/user-attachments/assets/3be961c9-038a-4e3c-b36f-d6ab4a3a9c8b" />
    </td>
    <td align="center">
      모바일에서는 닉네임 검색과 결과 카드 탐색이 가능한 메인 화면
      <br/><br/>
      <img width="160" alt="모바일 메인 화면" src="https://github.com/user-attachments/assets/3da148ce-e0ce-46aa-9278-93b9ae755c21" />
    </td>
  </tr>
<tr>
    <th>PC 이미지 확인 및 강조 화면</th>
    <th>모바일 이미지 다운로드 화면</th>
  </tr>
  <tr>
    <td align="center">
      새로 추가되거나 선택한 이미지가 크게 강조되며 확인 가능한 PC 화면
      <br/><br/>
      <img width="480" alt="PC 이미지 다운로드 화면" src="https://github.com/user-attachments/assets/cff7a508-c47d-4905-92bd-8ef0a25fa0c8" />
    </td>
    <td align="center">
      선택한 결과 이미지를 크게 확인하고 다운로드할 수 있는 모바일 화면
      <br/><br/>
      <img width="160" alt="모바일 이미지 다운로드 화면" src="https://github.com/user-attachments/assets/aea7395a-3f69-494a-a529-150e193f6e77" />
    </td>
  </tr>
</table>

---

## 화면 구성

| 화면 | 설명 |
|---|---|
| PC 메인 화면 | QR을 통한 모바일 진입 유도 |
| 모바일 메인 화면 | 닉네임 검색 및 결과 카드 탐색 |
| PC 이미지 다운로드 화면 | 이미지 확대 보기 및 다운로드 |
| 모바일 이미지 다운로드 화면 | 모바일 환경에서의 이미지 확대 보기 및 다운로드 |

---

## 사용자 흐름

1. 키오스크 프로그램에서 AI 결과 생성
2. 사용자가 QR을 통해 결과 페이지 접속
3. 모바일에서는 닉네임 검색 또는 카드 탐색으로 결과 확인
4. 원하는 결과를 선택하여 상세 화면 확인
5. 이미지 다운로드
6. 새 결과가 추가되면 자동으로 목록 반영

---

## 프로젝트 의의

이 프로젝트는 오프라인 키오스크 체험과 온라인 결과 확인 경험을 자연스럽게 연결하는 웹 페이지입니다.

단순한 결과 조회를 넘어 접속 환경에 따른 UX 분기, GCS 기반 이미지 로딩, 폴링을 통한 자동 갱신, 카드 인터랙션 최적화까지 포함하여 실제 체험형 서비스에 적합한 구조로 구성한 점이 핵심입니다.
