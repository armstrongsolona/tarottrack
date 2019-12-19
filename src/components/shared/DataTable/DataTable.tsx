import React from 'react';
import styled from 'styled-components';
import Cell from './components/Cell';
import HeaderCell from './components/HeaderCell';
import { boxShadow } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface DataTableProps {
  caption?: string;
  headers?: string[];
  rows: React.ReactNode[][];
}

class DataTable extends React.Component<DataTableProps, never> {
  render() {
    const { caption, headers } = this.props;

    const tableHeaders = headers ? this.renderTableHeaders() : null;

    return (
      <DataTableStyles>
        <caption>{caption}</caption>
        <tbody>
          {tableHeaders}
          {this.renderTableRows()}
        </tbody>
      </DataTableStyles>
    );
  }

  renderTableHeaders = () => {
    const { headers } = this.props;

    if (!headers) return;

    const headersMarkup = headers.map((header, index) => {
      return (
        <HeaderCell scope='col' key={index}>
          {header}
        </HeaderCell>
      );
    });

    return <tr>{headersMarkup}</tr>;
  };

  renderTableRows = () => {
    const { rows } = this.props;

    if (!rows) return;

    const rowsMarkup = rows.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => {
            const key = parseInt(`${rowIndex}${cellIndex}`);

            return <Cell key={key}>{cell}</Cell>;
          })}
        </tr>
      );
    });

    return rowsMarkup;
  };
}

const DataTableStyles = styled.table`
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-collapse: collapse;
  border-radius: 0.25rem;
  box-shadow: ${boxShadow};
  color: ${COLORS.BLACK};
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  text-align: left;
  width: 100%;
`;

export default DataTable;
