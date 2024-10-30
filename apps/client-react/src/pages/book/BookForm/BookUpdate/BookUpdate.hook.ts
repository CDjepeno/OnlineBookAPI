import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { BookQueriesKeysEnum } from "../../../../enum/enum";
import { UseQueryWorkflowCallback } from "../../../../request/commons/useQueryWorkflowCallback";
import { updateBook } from "../../../../services/book.services";
import {
  UpdateBookFormType,
  UpdateBookResponse,
} from "../../../../types/book/book.types";

interface ErrorResponse {
  message: string;
}

function BookUpdateHook() {
  const queryClient = useQueryClient();
  const { onSuccessCommon, onErrorCommon } = UseQueryWorkflowCallback();

  console.log("update hookkkkk");

  const { mutateAsync: updateBookMutation } = useMutation<
    UpdateBookResponse,
    AxiosError<unknown>,
    { id: string; data: FormData }
  >({
    mutationFn: async ({ id, data }) => updateBook(id, data),

    onSuccess: () => {
      onSuccessCommon("Le livre a été mis à jour avec succès");
      queryClient.invalidateQueries({
        queryKey: [BookQueriesKeysEnum.BooksUser],
      });
    },

    onError: (error: Error | AxiosError<unknown>) => {
      let errorMessage =
        "Une erreur est survenue lors de la mise à jour du livre";

      if ((error as AxiosError<unknown>).isAxiosError) {
        if (
          (error as AxiosError).response &&
          (error as AxiosError).response!.data &&
          ((error as AxiosError).response!.data as ErrorResponse)
        ) {
          errorMessage = ((error as AxiosError).response!.data as ErrorResponse)
            .message;
        }
      }

      onErrorCommon(errorMessage);
    },
  });

  const submit = async (formData: UpdateBookFormType) => {
    try {
      console.log("data update", formData);
      const { id, name, description, author, releaseAt, coverUrl } = formData;

      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("author", author);
      data.append("releaseAt", releaseAt ? releaseAt.toString() : "");
      console.log(coverUrl && coverUrl[0]);
      
      if (coverUrl && coverUrl instanceof FileList) {
        console.log('Fillllllllllllllleeeeeeeeeeeeee');
        
        data.append("coverUrl", coverUrl[0]);
      }

      await updateBookMutation({ id, data });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du livre", error);
    }
  };

  return {
    submit,
  };
}

export default BookUpdateHook;
