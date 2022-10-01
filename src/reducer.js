export const initialState = {
  gigs: [
    {
      _id: 1,
      gigName: "Writing",
      startingPrice: 4.3,
      page: 1,
      words: 275,
      singleSpaces: 550,
      doubleSpaces: 275,
      timePeriod: [
        { duration: "6 Hours", durationPrice: 6.5 },
        { duration: "12 Hours", durationPrice: 5.5 },
        { duration: "1 Day", durationPrice: 4.7 },
        { duration: "2 Day", durationPrice: 4.0 },
        { duration: "3 Day", durationPrice: 3 },
      ],
      almaMater: [
        { level: "School", levelPrice: 0.7 },
        { level: "College", levelPrice: 0.7 },
        { level: "University", levelPrice: 0.7 },
        { level: "Maters", levelPrice: 1.4 },
        { level: "Doctorate", levelPrice: 1.4 },
      ],
      gigType: [
        {
          id: 1,
          gigTypeName: "Essay(any type)",
          gigTypePrice: 3.2,
        },
        {
          id: 2,
          gigTypeName: "Admission Essay",
          gigTypePrice: 4.2,
        },
        {
          id: 3,
          gigTypeName: "Article Writing",
          gigTypePrice: 3.6,
        },
        {
          id: 4,
          gigTypeName: "Article Review",
          gigTypePrice: 3.5,
        },
        {
          id: 5,
          gigTypeName: "Movie Review",
          gigTypePrice: 5.2,
        },
        {
          id: 6,
          gigTypeName: "Course Work",
          gigTypePrice: 6.2,
        },
        {
          id: 7,
          gigTypeName: "Outline",
          gigTypePrice: 4.5,
        },
        {
          id: 8,
          gigTypeName: "Marketing Plane",
          gigTypePrice: 7,
        },
        {
          id: 9,
          gigTypeName: "Letters/Memos",
          gigTypePrice: 5.1,
        },
        {
          id: 10,
          gigTypeName: "Case study",
          gigTypePrice: 6.5,
        },
        {
          id: 11,
          gigTypeName: "Business Plan",
          gigTypePrice: 7.2,
        },
      ],
    },
  ],
};

export function dispatcher(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        words: state.words + 275,
        page: state.page + 1,
        price: state.price + 11.2,
      };
    case "DECREMENT":
      return {
        ...state,
        words: state.words - 275,
        page: state.page - 1,
        price: state.price - 11.2,
      };
  }
}
