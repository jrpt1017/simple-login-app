import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { logInUser, userDetails } from "../redux/slices";

const Register = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const watchAllFields = watch();

  const onSubmit = (data) => {
    const {
      street,
      suite,
      city,
      zipcode,
      companyName,
      catchPhrase,
      bs,
      name,
      username,
      email,
      phone,
      website,
    } = data;
    const formattedData = {
      id: 11,
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase,
        bs,
      },
    };
    dispatch(logInUser(formattedData));
    router.push("/dashboard");
  };

  const handleResetForm = () => {
    reset();
  };

  const isSubmitDisabled = () => {
    let value = false;
    Object.keys(watchAllFields).forEach((propertyName) => {
      if (watchAllFields[propertyName] === "") {
        value = true;
      }
    });
    return value;
  };

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h3" align="center">
        Register Account:
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          margin: "auto",
          width: 750,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            sx={{
              backgroundColor: "#241f1f80",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              padding: 1.2,
              marginBottom: 3,
            }}
          >
            Personal Information
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              padding: 2,
            }}
          >
            <Grid item>
              <TextField
                size="small"
                placeholder="Name"
                {...register("name")}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                placeholder="Username"
                {...register("username")}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                placeholder="Email"
                {...register("email")}
              />
            </Grid>
          </Grid>
          <Divider
            sx={{
              marginTop: 3,
            }}
          />

          <Typography
            sx={{
              backgroundColor: "#241f1f80",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              padding: 1.2,
              marginBottom: 3,
            }}
          >
            Contact Information
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              padding: 2,
            }}
          >
            <Grid item xs={4}>
              <TextField
                size="small"
                placeholder="Street"
                {...register("street")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                placeholder="House number"
                {...register("houseNumber")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                placeholder="City"
                {...register("city")}
              />
            </Grid>
            <Grid item container>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  placeholder="Zip code"
                  {...register("zipcode")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  placeholder="Contact No."
                  {...register("phone")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  placeholder="Website"
                  {...register("website")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            sx={{
              marginTop: 3,
            }}
          />

          <Typography
            sx={{
              backgroundColor: "#241f1f80",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              padding: 1.2,
              marginBottom: 3,
            }}
          >
            Company Information
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              padding: 2,
            }}
          >
            <Grid item xs={4}>
              <TextField
                size="small"
                placeholder="Name"
                {...register("companyName")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                placeholder="Catchphrase"
                {...register("catchPhrase")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField size="small" placeholder="BS" {...register("bs")} />
            </Grid>
          </Grid>

          <Box
            display="flex"
            textAlign="right"
            gap="10px"
            justifyContent="flex-end"
            sx={{
              marginBottom: 1,
              marginRight: 1,
            }}
          >
            <Button
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              color="error"
              onClick={handleResetForm}
            >
              Clear form
            </Button>
            <Button
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              type="submit"
              disabled={isSubmitDisabled()}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
