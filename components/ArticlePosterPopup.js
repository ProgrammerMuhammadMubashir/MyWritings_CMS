

import { useState } from "react";


 function ArticlePosterPopup({ isSuccess }) {
const [visible,setVisible]=useState(isSuccess)

if(visible==true){
  return (
    <div className="pop-wrapper">
      <div className="pop-box">
        <button
          className="pop-close"
          onClick={() => setVisible(null)}
          aria-label="Close popup"
        >
          ✕
        </button>
          <div className="pop-success">
            ✅ <span>Article posted successfully</span>
          </div>   
      </div>
    </div>
  );
}
else if(visible==false){
return (
    <div className="pop-wrapper">
      <div className="pop-box">
        <button
          className="pop-close"
          onClick={() => setVisible(null)}
          aria-label="Close popup"
        >
          ✕
        </button>
       <div className="pop-fail">
            ❌ <span>Article not posted successfully</span>
          </div>
      </div>
    </div>
  );
}
else{
  return null;
}
}


export default ArticlePosterPopup