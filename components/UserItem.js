import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const UserItem = ({ user }) => {
  return (
    <Grid item>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body2">
            Currently employed at {user.company ? user.company.name : ""}
            <br />
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
              }}
            >
              {user.company ? user.company.catchPhrase : ""}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
