# 뜨개질 블로그 (React)
리액트로 만든 뜨개질 기록 블로그입니다.


##  📘 제작

**[제작 과정]**
- 친한 친구가 취미로 뜨개질을 시작했고, 친구의 작품이 점점 고퀄리티가 되는 것을 옆에서 지켜봤다. 
- 친구의 뜨개질 여정이 기록됐으며 하는 마음으로 작성하기 부담 없는 단순한 블로그를 커스터마이징했다.

**[내용]**
- 화면에서 게시글 리스트를 표시 [[#1]](https://github.com/tae100k/react-blog/issues/1)
- 게시글 클릭 시 모달창 표시 [[#3]](https://github.com/tae100k/react-blog/issues/3)
    - 모달창에서 게시글 제목, 내용, 날짜, 설명, 사진 표시
    
<img height="400px" src="https://user-images.githubusercontent.com/78027252/152671132-d4d0d560-5bf7-46c3-8945-75d878e1557b.gif"/>
    
## 로컬 환경 구동

- 프로젝트 clone
    ```
        git clone https://github.com/tae100k/react-blog
    ```
- 디렉토리 이동
    ```
        cd project
    ```
- 패키지 설치
    ```
        npm install
    ```
-  시작
    ```
        npm run start
    ```
    
    
##  자료 구조

```bash
    project/src
    │
    ├── App.js
    ├── components
    │   ├── main
    │   │    ├── main.js
    │   │    └── main.css
    │   ├── modal
    │   │    ├── modal.js
    │   │    └── modal.css
    │   ├── new-post
    │   │    ├── newPost.js
    │   │    └── newPost.css
    │   └── post
    │       ├── post.js
    │       └── post.css    
    ├── index.js
    ├── index.css
    └── data
        └── data.js 
  

```

##  💻 배포
🔗 배포 링크 : https://knittingnanymous.netlify.app/


## 배운점
    
- 개인 프로젝트였지만 다른 사람이 보고 있다는 마음가짐으로 issue, branch, PR을 관리하였고, 덕분에 체계적으로 프로젝트 전체를 관리할 수 있었다.
- 고화질 이미지 첨부 때문에 처음에 로딩 시간이 무척 길었다. 이를 해결하고자 리팩토링 하면서 이미지 폴더의 위치를 조정하고 라이브러리로 이미지를 압축하는 등 다양한 시도를 해볼 수 있었다. 


