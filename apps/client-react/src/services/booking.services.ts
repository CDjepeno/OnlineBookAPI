import {
  BookingBookFormType,
  UpdateBookingUserFormType,
} from "src/types/booking/form.types";
import {
  BookingBookResponse,
  DeleteBookingsUserResponse,
  DeleteBookingUserResponse,
  GetBookingsBookResponse,
  GetBookingUserPaginationResponse,
  UpdateBookingUserResponse,
} from "src/types/booking/response.types";
import { MethodHttpEnum } from "../enum/enum";
import { UseRequestApi } from "../request/commons/useApiRequest";
import {
  BOOKING_BOOK_ROUTE,
  DELETE_BOOKING_USER_ROUTE,
  DELETE_BOOKINGS_USER_ROUTE,
  GET_BOOKINGS_BOOK_ROUTE,
  GET_BOOKINGS_USER_ROUTE,
  UPDATE_BOOKING_USER_ROUTE,
} from "../request/route-http/route-http";

export const getBookingsBook = async (
  id: string
): Promise<GetBookingsBookResponse[]> => {
  return await UseRequestApi<GetBookingsBookResponse[], { id: string }>({
    path: `${GET_BOOKINGS_BOOK_ROUTE}/${id}`,
    method: MethodHttpEnum.GET,
    params: { id },
    includeAuthorizationHeader: false,
  });
};

export const BookingBook = async (
  data: BookingBookFormType
): Promise<BookingBookResponse> => {
  return await UseRequestApi<BookingBookResponse, BookingBookFormType>({
    path: BOOKING_BOOK_ROUTE,
    method: MethodHttpEnum.POST,
    params: data,
    includeAuthorizationHeader: true,
  });
};

export const GetBookingsUser = async (
  id: string,
  page: number,
  limit: number
): Promise<GetBookingUserPaginationResponse> => {
  return await UseRequestApi<GetBookingUserPaginationResponse, { id: string }>({
    path: `${GET_BOOKINGS_USER_ROUTE}/${id}?page=${page}?limit=${limit}`,
    method: MethodHttpEnum.GET,
    params: { id },
    includeAuthorizationHeader: true,
  });
};

export const UpdateBookingUser = async (
  updatedBookinkUser: UpdateBookingUserFormType
): Promise<UpdateBookingUserResponse> => {
  return await UseRequestApi<
    UpdateBookingUserResponse,
    UpdateBookingUserFormType
  >({
    path: UPDATE_BOOKING_USER_ROUTE,
    method: MethodHttpEnum.PUT,
    params: updatedBookinkUser,
    includeAuthorizationHeader: true,
  });
};

export const DeleteBookingUser = async (
  id: number
): Promise<DeleteBookingUserResponse> => {
  return await UseRequestApi<UpdateBookingUserResponse, { id: number }>({
    path: `${DELETE_BOOKING_USER_ROUTE}/${id}`,
    method: MethodHttpEnum.DELETE,
    params: { id },
    includeAuthorizationHeader: true,
  });
};

export const DeleteBookingsUser = async (
  ids: number[]
): Promise<DeleteBookingsUserResponse> => {
  return await UseRequestApi<DeleteBookingsUserResponse, { ids: number[] }>({
    path: DELETE_BOOKINGS_USER_ROUTE,
    method: MethodHttpEnum.DELETE,
    params: { ids },
    includeAuthorizationHeader: true,
  });
};
