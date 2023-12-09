import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const name = req.body;
  const result = await AcademicFacultyServices.createAcademicFacultyToDB(name);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created Successfully',
    data: result,
  });
});

const getAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAcademicFacultiesToDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all academic faculties Successfully',
    data: result,
  });
});

const getAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAcademicFacultyToDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get academic faculty Successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFaculty(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update academic faculty Successfully',
    data: result,
  });
});

const deleteAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.deleteAcademicFaculty(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic faculty deleted Successfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAcademicFaculties,
  getAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
