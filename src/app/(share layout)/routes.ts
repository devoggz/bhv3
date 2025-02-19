export const Routes = {
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
  },
  public: {
    home: "/home",
    tasks: "/tasks",
    news: "/news",
    profile: "/profile",
    sokolaboda: "/sokolaboda",
    storyzapesa: "/storyzapesa",
    vifaanamapambo: "/vifaanamapambo",
    saccozitujenge: "/sacco-zitujenge",
    tushirikianetufaulu: "/tushirikiane-tufaulu",
    bikeyangu: "/bike-yangu",
    challenge: "/challenge",
    quiz: "/quiz",
    about: "/about",
    terms: "/terms",
    privacy: "/privacy",
    settings: "/settings",

    notFound: "/404",
    userID: (userID: string) => `/user/${userID}`,
    listingDetails: (slug: string) => `/listing/${slug}`,
    addListing: "/add-listing",
  },
};
