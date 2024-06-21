import { DevTool } from "@hookform/devtools";
import { Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fr } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { createGlobalStyle } from "styled-components";
import FormInput from "../../components/FormInput";
import AddBookHook from "./Add-book.hook";

registerLocale("fr", fr);

const GlobalStyle = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
`;

export default function AddBook() {
  const { submit, handleSubmit, errors, control } = AddBookHook();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <GlobalStyle />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Ajouter un Livre
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(submit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInput
                name="name"
                label="Nom"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                name="description"
                label="Description"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                name="author"
                label="Auteur"
                control={control}
                errors={errors}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="releaseAt"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    selected={value}
                    onChange={onChange}
                    ref={ref}
                    locale="fr"
                    dateFormat="dd/MM/yyyy"
                    customInput={
                      <TextField
                        fullWidth
                        label="Date de parution"
                        error={!!errors.releaseAt}
                        helperText={
                          errors.releaseAt ? errors.releaseAt.message : ""
                        }
                      />
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  padding: "15px",
                  border: errors.coverFile ? "1px solid red" : "1px solid #bbb",
                  borderRadius: "5px",
                }}
              >
                <Controller
                  name="coverFile"
                  control={control}
                  render={({ field: { onChange, ref } }) => (
                    <input
                      type="file"
                      id="file-upload"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => {
                        console.log(e.target.files);
                        onChange(e.target.files);
                      }}
                      ref={ref}
                      style={{ width: "100%" }}
                    />
                  )}
                />
              </Box>
              {errors.coverFile && (
                <Typography color="error" m="4px 15px" variant="body2">
                  {errors.coverFile.message}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ajouter un livre
          </Button>
        </Box>
      </Box>

      <DevTool control={control} />
    </Container>
  );
}
