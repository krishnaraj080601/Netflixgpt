     export const Logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
     export const Api={
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODQ5OTEwY2EwMGQwYjY4NGYwMGI1OTAwODc5NmE2NSIsInN1YiI6IjY1MDQ3ODcyYjUxM2E4MDBhZDUwNWQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tMqjKXdKHp_dSYaGqNzzoY3N2R384caswqS96Ni2C90",
      },
    };
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
  export const BG_url="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"; 
  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];
  export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY