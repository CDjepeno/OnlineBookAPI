export type GetBookingUserResponse = {
  bookingId: number;
  bookId: number;
  title: string;
  coverUrl: string;
  startAt: string;
  endAt: string;
};

export type GetBookingUserPaginationResponse = {
  bookings: GetBookingUserResponse[];
  pagination: {
    totalBookings: number;
    currentPage: number;
    totalPages: number;
  };
};
