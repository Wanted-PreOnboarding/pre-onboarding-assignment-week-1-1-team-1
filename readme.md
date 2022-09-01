# 🚀 프로젝트의 실행 방법

```
npm install

npm start
```

# 📚 폴더 구조 설명
api 폴더
/auth

auth폴더 안에는 회원가입과 로그인과 관련된 axios코드들이 있습니다.

/todo

todo폴더에는 todo가져오기, todo수정, todo삭제, todo만들기 axios코드가 있습니다.

components 폴더
/auth

이메일과 패스워드를 입력받는 AuthForm 파일이있습니다.

/todo

새로운 todo를 작성받는 TodoForm이 있습니다.

todo를 받아와서 보여주는 TodoList가 있습니다.

todo를 업데이트 받는 수정 창인 TodoUpdateForm이 있습니다.

router 폴더
라우터 폴더에는 각각 하나의 페이지인 Todo파일과 Auth파일이 있습니다.
types 폴더
types 폴더에는 todo파일이 존재하는데 Todo객체의 타입과 update하는데 필요한

todo와 isCompleted타입이 존재합니다

# 🎄 tree

```
src
 ┣ api
 ┃ ┣ auth.ts
 ┃ ┣ interceptor.ts
 ┃ ┗ todo.ts
 ┣ components
 ┃ ┣ auth
 ┃ ┃ ┗ AuthForm.tsx
 ┃ ┗ todo
 ┃ ┃ ┣ TodoForm.tsx
 ┃ ┃ ┣ TodoList.tsx
 ┃ ┃ ┗ TodoUpdateForm.tsx
 ┣ router
 ┃ ┣ Auth.tsx
 ┃ ┗ Todo.tsx
 ┣ style
 ┃ ┣ AuthStyle.js
 ┃ ┣ GlobalStyle.js
 ┃ ┗ TodoStyle.js
 ┣ types
 ┃ ┗ todo.ts
 ┣ utils
 ┃ ┗ tokenProvider.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

# 배포 주소

https://wanted-pre-onboarding-fe-6-1-1.vercel.app/
