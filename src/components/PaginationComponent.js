import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PaginationComponent = ({ totalPages, setPage }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          variant="outlined"
          count={totalPages}
          color="secondary"
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
