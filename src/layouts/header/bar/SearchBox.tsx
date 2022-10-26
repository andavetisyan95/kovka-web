import React from "react";

import axios from "axios";

import { memo, useCallback, useState, useEffect } from "react";

//react router
import { useNavigate } from "react-router-dom";

//MUI components
import { Typography, TextField, Box } from "@mui/material";

//icons from Mui
import SearchIcon from "@mui/icons-material/Search";

//types
import { Product } from "src/types/common-types";

const SearchBox = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<Product[]>([]);

  const navigate = useNavigate();

  const getItems = useCallback(() => {
    if (title.length >= 1 && title !== undefined) {
      setTimeout(async () => {
        const { data } = await axios.get<Product[]>(
          `${process.env.REACT_APP_SERVICE_HOST}?title_like=${title}`
        );
        setItems(data ?? []);
      }, 800);
    }
  }, [title]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search_results?query=${title}`);
      setTitle("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== " ") {
      setTitle(e.target.value);
    }
  };

  return (
    <Box>
      <Box>
        <TextField
          onChange={handleChange}
          onKeyPress={handleEnter}
          value={title}
          placeholder="Поиск"
          autoComplete="off"
          focused={false}
          InputProps={{
            sx: {
              "& input": {
                color: "white",
                padding: 1.5,
                ml: "5px"
              },
              border: "1px solid #FFFFFF",
              borderBottom: "1px solid #FFFFFF",
              borderRadius: "5px",
              ...(title && { borderBottom: "none", borderRadius: "5px 5px 0 0" }),
              bgcolor: title.length >= 1 ? "rgba(0,0,0,0.7)" : "transparent",
              display: "flex",
              flexDirection: "row",
              width: { xs: 230, sm: 230 }
            },
            endAdornment: <SearchIcon sx={{ color: "white" }} />
          }}
        />
      </Box>
      <Box sx={{ width: "100%", position: "absolute", top: 48 }}>
        {Boolean(title) && (
          <Box
            sx={{
              border: "1px  solid white",
              borderTop: "unset",
              borderRadius: "0 0 5px 5px",
              maxHeight: "200px",
              wordBreak: "break-all",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              overflow: "auto",
              backgroundColor: "rgba(0,0,0,0.7)"
            }}
          >
            {items.length ? (
              items.map(({ title, item }) => (
                <Typography
                  key={`${title}_${item}`}
                  className="clickable"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    lineHeight: 1.5,
                    textAlign: "start",

                    "&:hover": {
                      color: "primary.main"
                    }
                  }}
                  onClick={() => {
                    navigate(`/catalog_item/${item}`);
                    setTitle("");
                  }}
                >
                  {title}
                </Typography>
              ))
            ) : (
              <Typography>No result</Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default memo(SearchBox);
