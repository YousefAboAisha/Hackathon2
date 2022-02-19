import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function BasicRating({ rate }) {
  return (
    <Stack
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="half-rating-read"
        value={rate || 3}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
