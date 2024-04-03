import React from 'react';
import DashBoardWrapper from '../../component/DashBoardWrapper';
import { GridViewTableHead, GridViewTableBody } from '../../constants';
import GridViewTable from './GridViewTable';
import OverviewScreenHeader from './OverviewScreenHeader';

const AvailableListingGridView = () => {
  return (
    <DashBoardWrapper>
      <>
        <OverviewScreenHeader />
          <GridViewTable
            GridViewTableHead={GridViewTableHead}
            GridViewTableBody={GridViewTableBody}
          />
      </>
    </DashBoardWrapper>
  );
};

export default AvailableListingGridView;
