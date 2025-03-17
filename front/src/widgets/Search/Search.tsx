import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'

const Search = () => {
  return (
    <div className="search">
      <h2>Найти запрос</h2>
      <TextField
        className='search__input'
        fullWidth
        id="outlined-basic" 
        placeholder="Введите название задачи или организации" 
        variant="standard"
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
    </div>
  )
}

export default Search
