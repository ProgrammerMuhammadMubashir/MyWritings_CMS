import React from 'react'

const SelfArticle = ({article}) => {
  return (
    <main className="selfArticleMain">

      {/* HEADER */}
      <header className="selfArticleHeader">
        <h1 className="selfArticleHeading">{article.title}</h1>
        <p className="selfArticleMeta">
          By <span className="selfArticleAuthor">{article.author}</span> • {article.publish_date} • {article.category}
        </p>
      </header>

      {/* IMAGE PLACEHOLDER */}
      <div className="selfArticleImagePlaceholder">
        <span>Featured Image Here</span>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="selfArticleContent">
        {article.content}
      </article>

      {/* TAGS */}
      <div className="selfArticleTags">
        <span># {article.tags}</span>
      </div>

      {/* COMMENTS SECTION */}
      <section className="selfArticleCommentsSection">
        <h2 className="selfArticleSectionHeading">Comments</h2>

        {/* EXISTING COMMENTS */}
        <div className="selfArticleCommentList">
          {article.comments?.map((comment, index) => (
            <div className="selfArticleCommentCard" key={index}>
              <p className="selfArticleCommentAuthor">{comment.author}</p>
              <p className="selfArticleCommentText">{comment.text}</p>
            </div>
          ))}
        </div>

        {/* COMMENT BOX (UI ONLY) */}
        <div className="selfArticleCommentBox">
          <h3>Leave a Comment</h3>
          <input type="text" placeholder="Your Name" />
          <textarea placeholder="Write your comment here..."></textarea>
          <button>Post Comment</button>
        </div>
      </section>

    </main>
  );
};



export default SelfArticle