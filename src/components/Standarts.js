
import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import gql from 'graphql-tag';
import i18n from '../menu/translation/i18n';
import { withTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Query } from 'react-apollo'
const GET_DEVICE = gql`query { allDevice{name_EN,name_UA, module,category,id}}`;




const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        color:"linear-gradient(to right,#000222, rgba(23, 20, 61, 0.96),  #252529)"
    },
}));


function Standarts({t}){
    const classes = useStyles();



    return (
        <Table className={classes.table} aria-label="customized table">
            <TableHead stickyHeader aria-label="sticky table">
                <TableRow >
                    <StyledTableCell >Dessert </StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">Fat</StyledTableCell>
                    <StyledTableCell align="right">Carbs</StyledTableCell>
                    <StyledTableCell align="right">Protein</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                            <Query query={GET_DEVICE}>
                                {({ loading, error, data }) => {
                                    if (loading) return <div>Fetching</div>
                                    if (error) return <div>Error</div>

                                    const devicelist= data.allDevice
                                    return (
                                        <div>{devicelist.map(device =>
                                            <StyledTableCell key={device.id}
                                                             align="right">{device.category}</StyledTableCell>

                                         )}  </div>
                                    )}}
                            </Query>
                        </StyledTableCell>

                        <Query query={GET_DEVICE}>
                            {({ loading, error, data }) => {
                                if (loading) return <div>Fetching</div>
                                if (error) return <div>Error</div>

                                const devicelist= data.allDevice
                                return (
                                    <div>{devicelist.map(device =>
                        <StyledTableCell key={device.id} align="right" >{device.name_EN}</StyledTableCell>

                                    )}  </div>
                            )}}
                        </Query>

                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    );

}
export default withTranslation()(Standarts)