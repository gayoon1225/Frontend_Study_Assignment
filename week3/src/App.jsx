import "./App.css";

function Profile({ username, profileImg }) {
  return (
    <header className="post-profile">
      <img className="profile-image" src={profileImg} alt={`${username} 프로필`} />

      <strong className="profile-username">{username}</strong>

      <button className="more-button" type="button" aria-label="더 보기">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function Post({ username, profileImg, postImg, altText, likes, caption }) {
  return (
    <article className="post">

      <Profile username={username} profileImg={profileImg} />

      <div className="post-image-area">
        <img className="post-image" src={postImg} alt={altText} />
      </div>

      <div className="post-actions">
        <div className="left-actions">
          <button type="button" aria-label="좋아요">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>
          <button type="button" aria-label="댓글">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
            </svg>
          </button>
          <button type="button" aria-label="공유">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
            </svg>
          </button>
        </div>
        <button type="button" aria-label="저장">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 2h16v20l-8-6-8 6V2Z" />
          </svg>
        </button>
      </div>

      <section className="post-content">
        <p className="like-count">
          좋아요 <strong>{likes}</strong>개
        </p>
        <p className="caption">

          <strong>{username}</strong> <span>{caption}</span>
        </p>
      </section>
    </article>
  );
}

const postsData = [
  {
    id: 1,
    username: "eden",
    profileImg: "/images/eden-avatar.png",
    postImg: "/images/wow.png",
    altText: "홍익대학교 마스코트",
    likes: 44,
    caption: "프론트엔드 찍먹 중 냠냠",
  },
  {
    id: 2,
    username: "react_master",
    profileImg: "/images/eden-avatar.png",
    postImg: "/images/wow.png",
    altText: "리액트 공부 중",
    likes: 128,
    caption: "Component랑 map() 배우는 중,,,",
  },
  {
    id: 3,
    username: "code_study",
    profileImg: "/images/eden-avatar.png",
    postImg: "/images/wow.png",
    altText: "과제 제출",
    likes: 99,
    caption: "3주차 실습 과제",
  },
];

function App() {
  return (
    <main className="page">

     {postsData.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profileImg={post.profileImg}
          postImg={post.postImg}
          altText={post.altText}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </main>
  );
}

export default App;

