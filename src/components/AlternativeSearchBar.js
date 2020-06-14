/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import grey from "@material-ui/core/colors/grey";

const renderOptions = () => {
    return countries.map((company) => company.name);
};


export default function AlternativeSearchBar() {
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo={true}
                disableClearable={false}
                options={renderOptions()}
                renderInput={(params) => (
                    // <Grid container spacing={1} alignItems="flex-start">
                    //     <Grid item>
                    //         <AccountCircle />
                    //     </Grid>
                    //     <Grid item>
                    //         <TextField
                    //             {...params}
                    //             fullWidth={true}
                    //             style = {{width: 300, height: 100}}
                    //             id="input-with-icon-grid"
                    //             label="With a grid" />
                    //     </Grid>
                    // </Grid>
                    // <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                    <TextField
                        {...params}
                        placeholder="Country..."
                        InputProps={{
                            ...params.InputProps,
                            // type: 'search',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search fontSize="large" style={{color: "#8C8C8C"}} />
                                </InputAdornment>
                            ),
                            style: {
                                color: "#181a1c",
                                fontSize: "20px"
                            }
                        }}
                    />
                )}
            />
        </div>
    );
}

const countries = [
    { name: 'United States'},
    { name: 'United Kingdom'},
    { name: 'Canada'},
    { name: 'France'},
    { name: 'Germany'},
    { name: 'Italy'},
    { name: 'Mexico'},
    { name: "India"},
    { name: "China"},
    { name: "Japan"},
];
