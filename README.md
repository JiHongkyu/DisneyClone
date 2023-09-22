## Notice페이지 주요 기능
| **공지 등록하기** | **공지 수정하기**  |
|:---:| 	:---:|
|  ![공지등록](https://github.com/wowba/Wikinity/assets/121606131/0af8eb54-203f-41fb-8a63-a0a2e66a1329)|![공지수정](https://github.com/wowba/Wikinity/assets/121606131/7b11a338-39bd-438b-aad8-791691620189) 	| ![ezgif-4-c21991c473](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/139189221/5ef7c8a8-4d4d-49c9-a4e0-18421f6836c5)	|
| 📌 공지 등록 시 firestore에 데이터 저장 <br> 📌 공백문자 submit 방어코드 <br> 📌 firebase Storage에 이미지 저장 <br> (uuid로 storage에 저장 시 이미지 이름 중복 안도록 구현) 	| 📌 등록할 때 저장한 비밀번호 검사   <br>📌 공지 수정 시 firestore에 저장된 데이터 수정 	|
| **공지 상세페이지**	|  **공지 삭제하기**	|
| ![공지상세](https://github.com/wowba/Wikinity/assets/121606131/c2c08eaf-b72c-4e1f-971b-9a45cbc0dcca) |  ![공지삭제](https://github.com/wowba/Wikinity/assets/121606131/b0abceb8-50cb-46dc-9e08-c48c4f22c017) |
| 📌 해당 공지 클릭 시 공지 상세페이지로 이동 	| 📌 등록할 때 저장한 비밀번호 검사 <br> 📌 공지 삭제 시 firestore에 저장된 데이터 삭제  	|
|  **공지 검색하기** 	|   **페이지네이션**   |
| ![공지검색](https://github.com/wowba/Wikinity/assets/121606131/6aa3afc2-f855-4cec-923a-1b070d69684a) 	|  ![페이지네이션](https://github.com/wowba/Wikinity/assets/121606131/abfe4f35-f6ab-43cc-b668-9474f9622b19)   |
| 📌 Enter키 or 검색하기 버튼 클릭 시 검색 동작 <br> 📌 검색어와 일치하는 공지 없다면 명시적으로  표시 |  📌 페이지버튼 클릭 시 페이지에 해당하는 공지 보여주기 <br>📌 이전 or 다음 버튼 클릭 시 페이지 넘어가게 구현  |	

**Carousel**

 ![캐러셀](https://github.com/wowba/Wikinity/assets/121606131/827ce579-c651-4a33-aac3-89329537259c)
📌 캐러셀 클릭 시 해당 공지 상세페이지로 이동

## 느낀점
- 구현은 어렵지 않았지만 TypeScript나 ESLint가 너무 까다로워서 진을 뺏던 것 같다. 그러나 이러한 도구들을 사용하면서 확실히 코드의 품질이 향상되는 것을 느낄 수 있었다.

- Firebase를 처음 사용해봤는데, 정말 간편하게 백엔드 서비스를 구축할 수 있어서 놀랐다. 앞으로 혼자 프로젝트를 진행할 때 Firebase를 애용할 것 같다.

- 이번 프로젝트가 처음 해보는 협업 프로젝트였는데 혼자 프로젝트를 진행할 때보다 신경써야할 게 훨씬 많다는 것을 깨달았다.<br>
그래도 이번 프로젝트를 통해 어떻게 협업을 진행해야하는지 어느정도 감이 잡힌 것 같다.<br>

- 아쉬운 점이 있다면, 코드리뷰를 해보지 못한 것이다. 코드리뷰를 통해 피드백을 주고 받으면서 코드 품질을 높일 수 있었을 텐데 못해본 것이 너무 아쉽다. 다음 프로젝트에서는 꼭 코드리뷰 해보고싶다.
