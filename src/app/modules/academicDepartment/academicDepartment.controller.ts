import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.createAcademicDepartmentToDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department Created Successfully',
    data: result,
  });
});

const getAcademicDepartments = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.getAcademicDepartmentsToDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all academic department Successfully',
    data: result,
  });
});

const getAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.getAcademicDepartmentToDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get academic department Successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicDepartmentServices.updateAcademicDepartment(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update academic department Successfully',
    data: result,
  });
});

const deleteAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicDepartmentServices.deleteAcademicDepartment(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic faculty deleted Successfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAcademicDepartments,
  getAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
