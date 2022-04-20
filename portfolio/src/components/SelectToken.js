import React, { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { tokens } from "../helpers/tokens.json";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tokens = [
  'Wrapped Ether',
  'Chainlink',
  'Bitcoin',
  'Binance',
  'Solana',
  'Cardano',
];

export default function MultipleSelectChip() {
  const [tokenName, setTokens] = useState([]);

  const handleDelete = (chipToDelete: string) => {
      setTokens(tokens => tokens.filter(token => token !== chipToDelete))
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTokens(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Tokens</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={tokenName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={() => alert('Token removed')} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tokens.map((name) => (
            <MenuItem
              key={name}
              value={name}
              onDelete={() => handleDelete()}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}