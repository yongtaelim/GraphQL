# GraphQL
https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/ 참조하여 작성

## 정의
Graph Query Language의 약자
Server API를 통해 정보를 주고받기 위해 사용하는 Query Language 이다.

## 특징
1. GraphQL API 는 하나의 Endpoint를 사용
2. GraphQL API 는 요청할 때 사용한 Query 문에 응답의 구조가 달라진다.

## 장단점
### 장점
1. 기존의 RESTful API에서는 다양한 기종에서 필요한 정보들을 일일히 구현하는 것이 힘듦.
2. HTTP 요청 횟수를 줄일 수 있다.
3. HTTP 응답의 Size를 줄일 수 있다.
### 단점
1. File 전송 및 Text 만으로 하기 힘든 내용은 처리하기 복잡
2. 고정된 요청만 응답할 경우 Query로 인해 요청의 크기가 RESTful API 보다 커진다.

