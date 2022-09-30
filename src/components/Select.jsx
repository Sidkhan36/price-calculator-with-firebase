import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';

const names = [
  'Essay(any type)',
  'Admission Essay',
  'Article Writing',
  'Article Review',
  'Movie Review',
  'Course Work',
  'Outline',
  'Marketing Plane',
  'Letters/Memos',
  'Case study',
  'Business Plan',
];

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
 <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={names}
      sx={{ width: 300 , padding:2}}
      size='small'
      renderInput={(params) => <TextField {...params} />}
    />
    </div>
  );
}
