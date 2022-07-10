import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

// Di sini kita akan menggunakan useDispatch dan useSelector
// useSelector = adalah suatu hooks yang memperbolehkan kita memilih global state yang digunakan
// useDispatch = adalah suatu hooks yang memperbolehkan kita memilih action apa yang ingin dilakukan
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec,
} from "../features/counter/sliceCounter";

import { selectUser, selectCounter } from "../features/counter/sliceCounter";

const CounterReduxContainer = () => {
  // Tambahkan state untuk men-track perubahan amount
  const [currentAmount, setCurrentAmount] = useState(50);

  // useSelector ini menerima sebuah fungsi dengan satu parameter "state"
  // anggap saja ini seperti "filter"
  const username = useSelector(selectUser);
  const counter = useSelector(selectCounter);

  // Untuk menggunakan dispatch (action) nya, kita gunakan dispatcher dari hooks useDispatch
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Di sini kita akan memanggil dispatcher-nya,
    // jangan lupa untuk melemparkan aksi apa yang ingin dilakukan via
    // props "type"
    dispatcher(decrement());
  };

  const buttonResetOnClickHandler = () => {
    dispatcher(reset());
  };

  const buttonIncrementOnClickHandler = () => {
    dispatcher(increment());
  };

  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setCurrentAmount(amountFromField);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    // Kita panggil dispatcher lagi !
    dispatcher(decrementSpec(currentAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    dispatcher(incrementSpec(currentAmount));
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          React Redux
        </Typography>

        <Typography variant="body1" component="div">
          Nama User: {username}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>

        {/* 1 text field dan 2 button */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="amount"
            size="small"
            value={currentAmount}
            onChange={textFieldAmountOnChangeHandler}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementByAmountOnClickHandler}
          >
            - Amount
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementByAmountOnClickHandler}
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterReduxContainer;
