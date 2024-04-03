import React from 'react';
import { Link } from 'react-router-dom';
import DashBoardWrapper from '../../component/DashBoardWrapper';
import OverviewScreenHeader from './OverviewScreenHeader';
import exclamationCircle from '../../assets/images/exclamation-circle.png';
import framedPictureIcon from '../../assets/images/framed-picture-icon.png';
import playVideoIcon from '../../assets/images/play-video-icon.png';

const AddListingScreen = () => {
  return (
    <DashBoardWrapper>
      <>
        <div>
          <span className="text-xs">
            Dashboard &lt; Watched Listing &lt;{' '}
            <span className="text-blue-500">All Listing</span>{' '}
          </span>
        </div>
        <div className="flex flex-col items-start my-6">
          <h3 className="text-xl">Add Listing</h3>
          <div className="flex flex-col md:flex-row justify-between w-full my-4">
            <p className="text-xs text-gray-400 w-full md:w-2/4">
              Add your business details below to create your listing page.Click
              preview listing to see how your page will appear to buyers
            </p>
            <div className="flex justify-left md:justify-end items-center w-full md:w-2/4">
              <button className="bg-blue-700 text-white text-center w-2/4 mt-2 md:mt-0 md:w-1/4 rounded px-4 py-1">
                Preview
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-400 text-xs">Images & Videos</p>
          <p className="flex flex-col md:flex-row items-center text-orange-300 text-xs px-2 md:px-4 py-2 my-4 bg-orange-50 rounded w-full md:w-2/4">
            <span className="mr-2">
              <img src={exclamationCircle} alt="exclamation circle" />
            </span>{' '}
            Select some Images to show off your business.This will be displayed
            on the listing page
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between box-border">
          <p className="bg-white w-full mt-2 md:mt-0 md:w-4/12 flex justify-center items-center p-12 rounded md:mr-2 border-dashed border border-blue-200 ">
            <img src={framedPictureIcon} alt="add image" />
          </p>
          <p className="bg-white w-full mt-2 md:mt-0 md:w-4/12 flex justify-center items-center p-12 rounded md:mx-2 border-dashed border border-blue-200 ">
            <img src={framedPictureIcon} alt="add image" />
          </p>
          <p className="bg-white w-full mt-2 md:mt-0 md:w-4/12 flex justify-center items-center p-12 rounded md:ml-2 border-dashed border border-blue-200 ">
            <img src={playVideoIcon} alt="add video" />
          </p>
        </div>
        <div className="bg-transparent w-full flex justify-center text-blue-500 text-sm items-center p-6 rounded my-6 border-dashed border border-blue-200 ">
          Add images or videos
        </div>
        <div className="flex flex-col my-4">
          <p className="text-gray-400 text-xs">Summary</p>
          <p className="flex flex-col md:flex-row items-center text-orange-300 text-xs px-2 md:px-4 py-2 my-4 bg-orange-50 rounded w-full md:w-3/4">
            <span className="mr-2">
              <img src={exclamationCircle} alt="exclamation circle" />
            </span>{' '}
            Add summary to briefly introduce your bussiness.Be impactful,use
            keywords that help buyers search
          </p>
        </div>
        <div className="bg-transparent w-full flex justify-center text-blue-500 text-sm items-center p-6 rounded my-6 border-dashed border border-blue-200 ">
          Add Description
        </div>
        <p className="bg-white w-full flex justify-center items-center p-12 rounded border-dashed border border-blue-200 "></p>
      </>
    </DashBoardWrapper>
  );
};

export default AddListingScreen;
