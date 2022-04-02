# 필 다육 수제 화분(Feel Pot)

```
필 다육 수제 화분은 다육이를 사랑하고 다육이가 더욱 빛나길 바라는 마음으로 수제 다육 화분을 제작하여 판매합니다.
본 레퍼지토리는 필 다육 수제 화분의 홈페이지를 제작하는 개인 프로젝트입니다.
```

## Backend(Spring Boot)

Backend: https://github.com/silbioa480/FeelPot-Backend

```
본 레퍼지토리는 프론트엔드 프로젝트입니다.
백엔드 프로젝트를 보시려면 상단의 링크를 클릭해주세요.
백엔드 프로젝트는 Spring Boot 로 제작되었습니다.

This repository is Frontend project.
If you want to see backend project, please click upper link.
Backend project is built in Spring Boot.
```

## 사이트 배포

vercel: https://feel-pot-frontend.vercel.app/1

```
이 사이트에 처음 접속하는 경우에는, 상품 카드가 로드될 때까지 몇 분간 기다려 주세요.
이 사이트는 무료 서버를 사용하기 때문에 서버를 재시작하고 DB를 연결하는 데 시간이 필요합니다.

If you enter this site for the first time, please wait few minutes until product cards loaded.
Because of, this site use free cost server, It need times to restart the sever and connect DB.
```

## Stacks

+ React
+ Typescript
+ Recoil
+ styled-components
+ react-bootstrap
+ react-query
+ react-router-dom
+ react-hook-form
+ react-icons
+ axios
+ SweetAlert2
+ crypto-js
+ vercel

## 페이지 구성

### <center>Navigation & Header</center>

![Navigation Header](https://user-images.githubusercontent.com/75172264/161389765-3ec71d1b-97ad-4784-86fc-8577aee09f81.PNG)

- 네비게이션과 헤더는 모든 페이지에서 볼 수 있습니다.
- 네비게이션의 왼쪽 아이콘을 클릭하면 메인페이지로 이동합니다.
- 네비게이션 우측에 있는 아이콘을 클릭하면 밴드, 네이버 블로그, 인스타그램 등의 링크로 이동합니다.
- 로그인 상태가 아닐 시, 네비게이션 우측에 로그인 및 회원가입 버튼이 보입니다.
    - 로그인 버튼을 클릭하면 로그인 페이지로 이동합니다.
    - 회원가입 버튼을 클릭하면 회원가입 페이지로 이동합니다.
- 로그인 상태일 시, 네비게이션 우측에 로그아웃, 장바구니, 마이페이지 버튼이 보입니다.
    - 로그아웃 버튼을 클릭하면 로그아웃됩니다.
    - 장바구니 버튼을 클릭하면 장바구니 페이지로 이동하며, 현재 등록된 장바구니의 내역을 보여줍니다.
    - 마이페이지 버튼을 클릭하면 마이페이지로 이동하며, 로그인된 회원의 정보 확인 및 수정을 할 수 있습니다.
- 헤더에는 사진이 보이며 시간이 지나면 자동으로 사진이 변경됩니다. 또는 헤더 좌, 우측에 있는 버튼을 클릭하여 사진을 변경할 수 있습니다.

### <center>Main</center>

![main_01](https://user-images.githubusercontent.com/75172264/161390061-7c86bfc9-ed3c-465d-8c0b-56cdb80393b6.PNG)
![main_02](https://user-images.githubusercontent.com/75172264/161390065-9cced195-9126-4d3f-ad7e-1130c984d0e9.PNG)

- 메인페이지에서는 필 수제 화분에 등록된 상품들을 목록을 카드 형태로 볼 수 있습니다.
- 각 카드에는 상품의 이미지, 이름, 가격, 설명 등이 포함되어 있습니다.
- 카드를 클릭하면 해당 상품의 개별 페이지로 이동합니다.

![main_03](https://user-images.githubusercontent.com/75172264/161390066-8a22537b-ddda-49c4-8f4c-f52a60822d31.PNG)
![main_04](https://user-images.githubusercontent.com/75172264/161390068-a6141c98-bbba-4655-a915-987438ce1640.PNG)

- 메인페이지 하단에는 페이지 버튼이 있으며 각 버튼을 클릭하면 해당 숫자의 페이지로 이동하며 보여지는 상품들이 변경됩니다.

### <center>Product</center>

![product](https://user-images.githubusercontent.com/75172264/161390487-51896b04-6bda-4d8e-99a9-29a3f8c951c5.PNG)

- 상품 개별 페이지에서는 해당 상품의 이미지, 이름, 가격, 설명 등을 확인할 수 있습니다.
- 우측의 장바구니 버튼을 클릭하여 해당 상품을 장바구니에 추가할 수 있습니다.

![product_need_login](https://user-images.githubusercontent.com/75172264/161390558-ed1af49d-edcf-4b51-b314-20df55bd4291.PNG)

- 로그인 상태가 아닐 시, 경고창이 발생하며 로그인 페이지로 이동합니다.

![product_addCart](https://user-images.githubusercontent.com/75172264/161390485-82c6556d-6269-49de-b62e-013824cc0a4c.PNG)

- 로그인 상태일 시, 해당 상품이 장바구니에 추가되며 장바구니 페이지에서 추가된 상품 내역을 확인 할 수 있습니다.

### <center>Sign Up</center>

![signup_01](https://user-images.githubusercontent.com/75172264/161390374-1f960502-8b7d-4012-a514-fb2271aed723.PNG)
![signup_02](https://user-images.githubusercontent.com/75172264/161390375-31eb3052-ee4f-4c93-bce5-ed355d02368a.PNG)

- 회원 가입 페이지에서는 회원 가입에 필요한 정보들을 입력하여 회원 가입 할 수 있습니다.

![signup_error](https://user-images.githubusercontent.com/75172264/161390377-fb5ced08-e26a-429b-ba39-579189e139e8.PNG)

- 필요한 정보를 입력하지 않거나 형식에 맞지 않게 입력한 경우, 에러가 발생하며 회원 가입이 되지 않습니다.

![signup_success](https://user-images.githubusercontent.com/75172264/161390382-392c9e7f-56b4-4deb-ac60-946041a81f2a.PNG)

- 필요한 정보를 모두 입력하고 올바른 형식으로 입력되었다면, 정상적으로 회원 가입이 되며 로그인 페이지로 이동합니다.

### <center>Log In</center>

![login](https://user-images.githubusercontent.com/75172264/161390268-0cbf4566-7510-4010-8abd-768f7a3136ba.png)

- 로그인 페이지에서는 아이디와 비밀번호를 입력하여 로그인 할 수 있습니다.

![login_error](https://user-images.githubusercontent.com/75172264/161390566-97197bf0-74b7-4ce0-a6e2-61d246e97547.PNG)

- 등록되지 않은 아이디 또는 잘못된 비밀번호를 입력하면 에러가 발생하며, 로그인 할 수 없습니다.
- 등록된 아이디의 올바른 비밀번호를 입력하면, 정상적으로 로그인되며 메인페이지로 이동합니다.

### <center>My Page & Cart</center>

![myPage_information](https://user-images.githubusercontent.com/75172264/161390796-7c5d79ed-5988-4a66-a6b2-ec872d269035.PNG)

- 마이페이지에서는 좌측의 메뉴 탭을 클릭하여 페이지를 이동할 수 있습니다.
- 회원정보 탭에서는 현재 로그인 된 회원의 정보를 확인 할 수 있습니다.

![myPage_modify](https://user-images.githubusercontent.com/75172264/161390797-3976f1ee-d9d8-4520-abaa-fb1f3a11b42a.PNG)

- 회원 정보 수정 탭에서는 현재 로그인 된 회원의 정보를 수정 할 수 있습니다.

![myPage_cart](https://user-images.githubusercontent.com/75172264/161390798-4a348d19-b258-4669-9300-fe0db496cc67.PNG)

- 장바구니 탭에서는 현재 로그인 된 회원이 장바구니에 추가한 상품 내역을 보여줍니다.
- 상품 카드 좌측에 있는 휴지통 버튼을 클릭하여 해당 상품을 장바구니에서 뺄 수 있습니다.
- 장바구니 하단에 현재 장바구니에 포함된 모든 상품의 가격 합계를 표시합니다.
