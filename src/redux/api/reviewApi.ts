import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    reviews: build.query({
      query: (id: string | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

    reviewCreate: build.mutation({
      query: (reviewData) => ({
        url: `${REVIEW_URL}/create-review`,
        method: "POST",
        data: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useReviewsQuery, useReviewCreateMutation } = reviewApi;
